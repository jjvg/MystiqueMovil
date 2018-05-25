import { Component } from '@angular/core';
import { ClienteProvider} from '../../providers/cliente/cliente';
import { ModalController, NavParams, NavController } from 'ionic-angular';
import  {TiposProvider} from '../../providers/tipos/tipos';


@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {
	user:any;
  perfil:any;
  parametros:any;
  tipo_parametro:any;
  valor_parametros:any[];
  constructor(
  	public modalCtrl: ModalController,
  	public navCtrl: NavController, 
  	public navParams:NavParams,
  	private clienteService:  ClienteProvider,
    private tipoService: TiposProvider) {
  	this.user=this.clienteService.getCliente();
    this.perfil=this.clienteService.getPerfil();
    this.obtTipo_Parametros();
    this.optParametros();
    this.obtValorParametro();
    console.log(this.user);
     console.log(this.perfil);

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
}


