import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher } from 'ionic-angular';
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
  url_file:any;
  tips_personal:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public consejoService: ConsejoProvider, public authService: AuthProvider) {
    this.tips=[]
   this.url_file= this.authService.ApiFile();
  }
consejo(){
  this.consejoService.getConsejo().subscribe(
    (data)=>{
      this.tips=data['data'];
      console.log(this.tips)
    },(error)=>{console.log(error)}
    
  );
  
}
doRefresh(refresher: Refresher){
  this.consejoService.getConsejo().subscribe(
    (data)=>{
      this.tips=data['data'];
    },(error)=>{console.log(error)}
  );
  setTimeout(() => {
    refresher.complete();
  }, 5000);
}
  ionViewDidLoad() {
    this.url_api= this.authService.ApiUrl();
    this.tips=[];
   this.consejo();
  console.log(this.tips);
  }
  
}
