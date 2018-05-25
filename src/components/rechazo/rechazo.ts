import { Component } from '@angular/core';
import { AlertController, NavController, ViewController } from 'ionic-angular';
import { PrincipalPage } from '../../pages/principal/principal';

/**
 * Generated class for the RechazoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'rechazo',
  templateUrl: 'rechazo.html'
})
export class RechazoComponent {

  text: string;
 motivo:string;
  constructor(public viewCtrl : ViewController,public navCtrl : NavController, public alertCtrl:AlertController) {
    console.log('Hello RechazoComponent Component');
    this.text = 'Hello World';

  }
  closeModal(){
    this.viewCtrl.dismiss();
  }
  confirmar(){
      let alert = this.alertCtrl.create({
        title: '',
        message: '¿Seguro que desea Rechazar?',
        buttons: [
          {
            text: 'SI',
            handler: () => {
              console.log('Cancel clicked');
              this.GuardarRechazo();
              this.viewCtrl.dismiss();
            }
          },
          {
            text: 'No',
            handler: () => {
              console.log('Buy clicked');
              this.viewCtrl.dismiss();
            }
          }
        ]
      });
      
        alert.present(); 
  } 
  GuardarRechazo(){
    let alert = this.alertCtrl.create({
      title: 'Confirmacion',
      subTitle: 'Continuaremos Trabajando para usted, Gracias',
      buttons: [{
        text:'Cerrar',
      handler:()=>{
        let navTran=alert.dismiss();
          navTran.then(()=>{
            this.navCtrl.setRoot(PrincipalPage);
          });
        return false;
      }
      }],
    });
    alert.present()
  }

}
