import { SolicitudProvider } from './../../providers/solicitud/solicitud';

import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TiposProvider} from '../../providers/tipos/tipos';
import   {ClienteProvider} from '../../providers/cliente/cliente';
import { EmpleadoProvider} from '../../providers/empleado/empleado';
import { ServiciosProvider } from '../../providers/servicios/servicios';
import 'rxjs/add/operator/debounceTime';
import { FormControl } from '@angular/forms';

//import { PrincipalPage } from '../principal/principal';
//import{ FormBuilder, Validators} from '@angular/forms';
//import {FormGroup } from '@angular/forms/src/model';
/**
 * Generated class for the SolicitudPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solicitud',
  templateUrl: 'solicitud.html',
})
export class SolicitudPage {
  //Variables para busqueda
  searchTerm: string = '';
  searchControl: FormControl;
  searching: any = false;
  //....................
  // Definicion de objeto solicitud
  solicitud:{
    id_cliente:number,
    id_promocion:number,
    empleadosPelu:number,
    empleadosMaqui:number
    servicios:any[],
  };
  //........................
  //DEfinicion de arreglo de objeto servicios
  servicios:Array<
  {id:number,
   imagen:string,
   id_tipo_servicio:number,
   nombre:string,
   precio:number,
   descripcion:string,
   duracion:number,
   status:string,
   visible:boolean
   select:boolean}>;

  //...................

  empleados:any; //Variable para almacenar empleados
  tipoServicios :any;// Variable para los tipos de servicion 
  visible:Boolean=false;// Variable para comtrolar segmento de la  vista
  preferenciaAtencion:Boolean;// Mismo caso del anterior
  empleadovisible:Boolean;// Mismo Caso del anterior
  categoria:any;
  catego:boolean=true;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, 
    public dataSer: ServiciosProvider,
    public tipoService: TiposProvider,
    public clientService: ClienteProvider,
    public empleSrvce: EmpleadoProvider,
    public soliService:SolicitudProvider,
    ) {
    this.getCategorias();

  this.searchControl = new FormControl();
   this.solicitud={
    id_cliente:null,
    id_promocion:null,
    empleadosPelu:null,
    empleadosMaqui:null,
    servicios:[],
  };
  this.solicitud.servicios= [];
  console.log(this.navParams.data)
  if (this.navParams.data.tipo=="promocion") {
    console.log(this.navParams.data)
    this.visible=false;
    this.empleadovisible=true;  
  }else{
    this.empleadovisible=false;
  }
  this.preferenciaAtencion=false;
  this.empleados=[]
  this.setEmplea();
  }

  ionViewDidLoad() {
    console.log(this.servicios);
    this.setFilteredItems();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search  => {
      this.searching = false;
      this.setFilteredItems();
      });
    
    console.log('ionViewDidLoad SolicitudPage');
  }


  
  verConfirmacion()
  {
    let confir= this.alertCtrl.create({
      title: 'Seleccione una opción',
      message:'¿Desea selecionar un empleado en particular?',
      buttons:[
              {
                text:'SI',
                handler:()=>{
                console.log('Dijo que si');
                this.visible=false;
                this.preferenciaAtencion=false;
                this.empleadovisible=true;
                console.log(this.empleadovisible);
                  }
              },
              {
                text: 'NO',
                handler:()=>{
                
                  this.visible=true;
                  this.preferenciaAtencion=false;
                  this.empleadovisible=false;
                  this.newSolicitu(this.solicitud);
                console.log('Dijo que no');
                //this.asignarAleatorio();
                //this.guardarSolicitud();
                this.gotoGuardar();
                 }
              }
          ]
    });
    confir.present();
  }

 
    gotoGuardar(){
      let alert = this.alertCtrl.create({
        title: 'Confirmacion',
        subTitle: 'Gracias su solicitud sera atendida muy pronto',
        buttons: [{
          text:'Cerrar',
        handler:()=>{
          let navTran=alert.dismiss();
            navTran.then(()=>{
              this.navCtrl.popToRoot();
            });
          return false;
        }
        }],
      });
      alert.present()
    }
    onSearchInput(){
      this.searching = true;
     }
    setFilteredItems() {
      this.servicios = this.dataSer.filterItems(this.searchTerm);
      }
      verFecha(){
        this.visible=false;
      }
      verPreferencia(){
        let j=0;
        this.solicitud.servicios=[];
        this.solicitud.id_cliente=this.clientService.getCliente().id
        for (let i=0;  i < this.servicios.length;  ++i) {
          if(this.servicios[i].select===true){
            this.solicitud.servicios[j]=this.servicios[i].id;
            ++j; 
          }
        }
        console.log(this.solicitud);
        this.visible=false;
        this.preferenciaAtencion=true;
      }
      getTipoServicio(){
        this.tipoService.getTiposServicios().subscribe(
          (data)=>{
            this.tipoServicios=data['data'];
            },(error)=>{
              console.log(error)
          });
      }
      getCategorias(){
        this.tipoService.getCategorias_ser().subscribe((data)=>{
          this.categoria=data['data'];
          console.log(this.categoria)
        })
      }
      verlist(){
        this.visible=true;
        this.catego=false;
      }
      siguiente(i){
        this.visible=true;
        this.catego=false;
      }
      ver(i){
        console.log(this.servicios[i]);
      }
      setEmplea(){
        this.empleSrvce.getEmpleados().subscribe(
          (e)=>{
            this.empleados=e['data'];
            console.log(e)
          },(error)=>{
            console.log(error);
          })
      }
      newSolicitu(soli){
        this.soliService.saveSolicitud(soli).subscribe((soli)=>{
          console.log(soli);
        },(error)=>{
          console.log(error);
        })
      }

  }
