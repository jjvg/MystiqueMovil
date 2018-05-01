import { PrincipalPage } from './../principal/principal';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,
LoadingController, AlertController } from 'ionic-angular';
import{ FormBuilder, Validators} from '@angular/forms';
import {FormGroup } from '@angular/forms/src/model';
import { Loading } from 'ionic-angular/components/loading/loading';
import { AuthProvider } from '../../providers/auth/auth';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  myForm:FormGroup;
  public loading:Loading
  creden:{
    correo:String;
    contrasenia:String;
  };
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public formBuilder: FormBuilder,
    public authService: AuthProvider
  ) {
    this.creden= {
      correo:'',
      contrasenia:''
    }
    this.myForm = this.formBuilder.group({
      correo: ['', [Validators.required,Validators.email]],
      contrasenia: ['', Validators.required]
    });
  }
  loginUser(){
    this.creden.correo=this.myForm.value.correo;
    this.creden.contrasenia=this.myForm.value.contrasenia;
    this.authService.login(this.creden).subscribe(
      (data)=>{
        console.log(data);
        localStorage.setItem('id_user',data['id']);
        localStorage.setItem('auth_token', data['token'])
        this.navCtrl.setRoot(PrincipalPage);
        this.loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
        });
          this.loading.present();
      },(error)=>{
       let alert= this.alertCtrl.create({
          subTitle:'Las Credenciales Fallaron',
          buttons: [{
          text:'Cerrar',
            handler:()=>{
              alert.dismiss();
            }
          }]
        })
        alert.present()
        })
 }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
