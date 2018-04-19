import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { PrincipalPage } from '../../pages/principal/principal';

/**
 * Generated class for the CancelarcitaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cancelarcita',
  templateUrl: 'cancelarcita.html'
})
export class CancelarcitaComponent {

  text: string;
  items:any;
  motivo:string
  constructor(public viewCtrl : ViewController,public navCtrl : NavController, public alertCtrl:AlertController) {
  
    this.items=[{
      "motivo":"Falta de dinero",  
    },
  {
    "motivo":"Falta de tiempo",
  },
  {
    "motivo":"Otros motivos",    
  }];    

    console.log('Hello CancelarcitaComponent Component');
    this.text = 'Hello World';
  }
  closeModal(){
    this.viewCtrl.dismiss();
  }
  cancelarcita(){
      let alert = this.alertCtrl.create({
        title: '',
        message: '¿Seguro que desea cancelr su cita?',
        buttons: [
          {
            text: 'SI',
            handler: () => {
              console.log('Cancel clicked');
              this.gotoGuardar();
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
  } gotoGuardar(){
    let alert = this.alertCtrl.create({
      title: 'Confirmacion',
      subTitle: 'Su cita ha sido Cancelada',
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
