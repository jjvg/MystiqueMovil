import { Component } from '@angular/core';
import { ClienteProvider} from '../../providers/cliente/cliente';
import { ModalController, NavParams, NavController } from 'ionic-angular';
import  {TiposProvider} from '../../providers/tipos/tipos';


@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {
	user:any
  perfilgustos:any[];
  perfilcaracteristicas:any[];
  perfilbasico:any[];
  parametros:any;
  tipo_parametro:any;
  valor_parametros:any[];
  perfil:any[];
  sexo:string;
  constructor(
  	public modalCtrl: ModalController,
  	public navCtrl: NavController, 
  	public navParams:NavParams,
  	private clienteService:  ClienteProvider,
    private tipoService: TiposProvider) {
      this.sexo='';
  	this.user=this.clienteService.getCliente();
    this.perfil=this.clienteService.getPerfil();
    this.obtTipo_Parametros();
    this.optParametros();
    this.obtValorParametro();
    console.log(this.user);
  }
  ionViewDidLoad(){
    this.clasificarParametros();
    this.determinarSexo();
  }
  obtTipo_Parametros(){
    this.tipoService.getTipos_parametro().subscribe((data)=>{
      console.log(data);
      this.tipo_parametro=data['data'];
    },(error)=>{
      console.log(error);
    })
  }
  optParametros(){
    this.tipoService.getParametros().subscribe((data)=>{
      this.parametros=data['data'];
      console.log(this.parametros);
    },(error)=>{
      console.log(error);
    })
  }
  obtValorParametro(){
    this.tipoService.getValorParametro().subscribe((data)=>{
      this.valor_parametros= data['data'];
      console.log(this.valor_parametros);
    })
  }
  openModal() {

    //let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    //modal.present();
  }
  clasificarParametros(){
    this.perfilbasico=[];
    this.perfilcaracteristicas=[];
    this.perfilgustos=[];
    for (let i = 0; i < this.perfil.length; i++) {
        if(this.perfil[i].clasificacion === 'DB'){
          this.perfilbasico.push(this.perfil[i])
        }else{
          if(this.perfil[i].clasificacion === 'CA'){
            this.perfilcaracteristicas.push(this.perfil[i]);
          }else{
            if(this.perfil[i].clasificacion === 'GP'){
              this.perfilgustos.push(this.perfil[i])
            }
          }
        }
      
    }
    console.log(this.perfilbasico);
    console.log(this.perfilcaracteristicas);
    console.log(this.perfilgustos);
  }
  determinarSexo(){
    for (let i = 0; i < this.perfilbasico.length; i++) {
      if(this.perfilbasico[i].valor==='mujer'){
        this.sexo='mujer';
      }else{
        if(this.perfilbasico[i].valor==='hombre'){
          this.sexo='hombre';
        }
      }
    }
    console.log(this.sexo);
  }
}


