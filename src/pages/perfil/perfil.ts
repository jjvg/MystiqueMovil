import { Component } from '@angular/core';
import { ClienteProvider} from '../../providers/cliente/cliente';
import { ModalController, Platform, NavParams, NavController } from 'ionic-angular';


@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {
	user:any;
  constructor(
  	public modalCtrl: ModalController,
  	public navCtrl: NavController, 
  	public navParams:NavParams,
  	private clienteService:  ClienteProvider) {
  	this.user=this.clienteService.getCliente();
  }

  openModal() {

    //let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    //modal.present();
  }
}


