import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ConsejoProvider} from '../../providers/consejo/consejo';
/**
 * Generated class for the TipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tips',
  templateUrl: 'tips.html',
})
export class TipsPage {
  tips:any[];
  url_api:any;
  tips_personal:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public consejoService: ConsejoProvider, public authService: AuthProvider) {
    this.tips=[]
   
  }
consejo(){
  this.consejoService.getConsejo().subscribe(
    (data)=>{
      this.tips=data['data'];
      console.log(this.tips)
    },(error)=>{console.log(error)}
    
  );
  
}
  ionViewDidLoad() {
    this.url_api= this.authService.ApiUrl();
    this.tips=[];
   this.consejo();
  console.log(this.tips);
  }
  
}
