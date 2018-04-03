import { PrincipalPage } from './../principal/principal';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,
LoadingController, AlertController } from 'ionic-angular';
import{ FormBuilder, Validators} from '@angular/forms';
import {FormGroup } from '@angular/forms/src/model';
import { Loading } from 'ionic-angular/components/loading/loading';



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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public formBuilder: FormBuilder
  ) {
    this.myForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  loginUser(){
    this.navCtrl.setRoot(PrincipalPage);

    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
    });
    this.loading.present();
  }
  goToResetPassword(){
    this.navCtrl.push('ResetPasswordPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
