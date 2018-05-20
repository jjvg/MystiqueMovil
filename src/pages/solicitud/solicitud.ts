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
import { AuthProvider } from '../../providers/auth/auth';

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
  especi:any[];
  //....................
  // Definicion de objeto solicitud
  solicitud:{
    id_cliente:number,
    id_promocion:number,
    sexo:string,
    servicio:number[],
    empleado:number[],
  };
  //........................
  //DEfinicion de arreglo de objeto servicios
  servicios:Array<
  {id:number,
   imagen:string,
   tipo_servicio:string,
   nombre:string,
   precio:number,
   descripcion:string,
   duracion:number,
   id_categoria_servicio:number,
   categoria_servicio:string, 
   select:boolean}>;

  //...................
 serv:any[];

  empleados:Array<{
    apellido:string,
    cedula:string,
    direccion:string,
    estatus:string,
    fecha_creacion:string,
    fecha_nacimiento:string,
    id:number,
    id_ciudad:number,
    id_usuario:number,
    imagen:string,
    nombre:string,
    sexo:string,
    telefono:string,
    visible:boolean,
    ele:boolean
      }>; //Variable para almacenar empleados

  tipoServicios :any[];// Variable para los tipos de servicion 
  visible:Boolean=false;// Variable para comtrolar segmento de la  vista
  preferenciaAtencion:Boolean=false;// Mismo caso del anterior
  empleadovisible:Boolean;// Mismo Caso del anterior
  categoria:any;
  catego:boolean=true;
  serviciosmostrar:any[];
  tipos:any[];
  emple:any[];

  emplever:Array<{
apellido:string,
cedula:string,
direccion:string,
estatus:string,
fecha_creacion:string,
fecha_nacimiento:string,
id:number,
id_ciudad:number,
id_usuario:number,
imagen:string,
nombre:string,
sexo:string,
telefono:string,
visible:boolean,
ele:boolean
  }>;
  url_file:string
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, 
    public dataSer: ServiciosProvider,
    public tipoService: TiposProvider,
    public clientService: ClienteProvider,
    public empleSrvce: EmpleadoProvider,
    public soliService:SolicitudProvider,
    public authService:AuthProvider
    ) {
      this.empleados=[{
        apellido:"",
        cedula:'',
        direccion:"",
        estatus:"",
        fecha_creacion:"",
        fecha_nacimiento:'',
        id:0,
        id_ciudad:0,
        id_usuario:0,
        imagen:'',
        nombre:'',
        sexo:'',
        telefono:'',
        visible:false,
        ele:false}];
      this.emplever=[{
    apellido:"",
    cedula:'',
    direccion:"",
    estatus:"",
    fecha_creacion:"",
    fecha_nacimiento:'',
    id:0,
    id_ciudad:0,
    id_usuario:0,
    imagen:'',
    nombre:'',
    sexo:'',
    telefono:'',
    visible:false,
    ele:false}];
      this.servicios=[
      {id:0,
       imagen:'',
       tipo_servicio:'',
       nombre:'',
       precio:0,
       descripcion:'',
       duracion:0,
       id_categoria_servicio:0,
       categoria_servicio:'',
       select:false}];

    this.getCategorias();
    this.getServicios();
    this.searchControl = new FormControl();
    this.solicitud={
    id_cliente:null,
    id_promocion:null,
    sexo:'',
    servicio:[],
    empleado:[],
  };this.url_file=this.authService.ApiFile();
  
  console.log(this.navParams.data)
  if (this.navParams.data.tipo=="promocion") {
    console.log(this.navParams.data)
    this.visible=false;
    this.empleadovisible=true;  
  }else{
    this.empleadovisible=false;
  }
  this.setEmplea();
  this.getEspeciali();
  this.preferenciaAtencion=false;
  //this.setEmplea();
  this.tipos=[];
  this.emple=[];
  this.serviciosmostrar=[];
  }

  ionViewDidLoad() {
      this.tipoServicios=[];
    console.log('ionViewDidLoad SolicitudPage');
    this.getTipoServicio();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search  => {
      this.searching = false;
      this.setFilteredItems();
      this.getServicios();
      });
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
                this.emplever=[{
                  apellido:"",
                  cedula:'',
                  direccion:"",
                  estatus:"",
                  fecha_creacion:"",
                  fecha_nacimiento:'',
                  id:0,
                  id_ciudad:0,
                  id_usuario:0,
                  imagen:'',
                  nombre:'',
                  sexo:'',
                  telefono:'',
                  visible:false,
                  ele:false}];
                this.EmpleaosSexo(this.solicitud.sexo);
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
          console.log(this.solicitud);
          this.newSolicitu(this.solicitud);
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
      this.serviciosmostrar = this.filterItems(this.searchTerm);
      }
      verFecha(){
        this.visible=false;
      }
      verPreferencia(){
        this.solicitud.servicio=[];
        this.solicitud.id_cliente=this.clientService.getCliente().id
        for (let i=0;  i < this.servicios.length;  ++i) {
          if(this.servicios[i].select===true){
            this.solicitud.servicio.push(this.servicios[i].id)
          }
        }
        console.log(this.solicitud.servicio);
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
          console.log(this.categoria);
        })
      }
      verlist(){
        this.emple=this.empleados;
        this.visible=true;
        this.catego=false;
      }
      siguiente(item){
        console.log(this.servicios);
            for (let h = 0; h < this.servicios.length; h++) {
              if(item === this.servicios[h].categoria_servicio){
                this.serviciosmostrar.push(this.servicios[h]);
              }      
            }
        console.log(this.especi);
        this.emplePromo(item);
        this.setFilteredItems();
         console.log(this.serviciosmostrar);
         console.log(this.emple);
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
           
          },(error)=>{
            console.log(error);
          })
      }
      newSolicitu(soli){
        console.log(soli);
        this.soliService.saveSolicitud(soli).subscribe((soli)=>{
          console.log(soli);
        },(error)=>{
          console.log(error);
        })
      }
      getServicios(){
        this.dataSer.getServiciosconCategoria().subscribe((ser)=>{
          this.servicios=ser['data'];
           
        },(error)=>{
          console.log(error);
        })
      }
      filterItems(searchTerm){
        return this.servicios.filter((item) => {
         return item.nombre.toLowerCase().
          indexOf(searchTerm.toLowerCase()) > -1 ||
            item.tipo_servicio.toLowerCase().
          indexOf(searchTerm.toLowerCase()) > -1;;
         });
        }
        getEspeciali(){
          this.tipoService.getEspeciali().subscribe((es)=>{
            this.especi=es['data'];
            console.log(this.especi);
            },(error)=>{
              console.log(error)
            })
          }
          Sexo(val){
            this.solicitud.sexo=val;
            this.verConfirmacion();
          }
          AsignarEmpleado(id,i){
            this.solicitud.empleado.push(id);
            //this.emplever.splice(i,1);
          }
          EmpleaosSexo(sexo){
            console.log(sexo);
            this.emplever=[];
            if(sexo != "c"){
              console.log(sexo);
              for (let i = 0; i < this.empleados.length; i++) {
                console.log(this.empleados[i].sexo)
                if(this.empleados[i].sexo==sexo){
                  this.emplever.push(this.empleados[i])
                }            
              }
           }else{
             this.emplever=this.empleados;
           }  
           console.log(this.emplever);
        }
        emplePromo(item){
          this.empleSrvce.getEmpleCatego(item).subscribe((resp)=>{
            this.empleados=resp['data'].empleados;
            console.log(this.empleados);
          })
        }
  }
