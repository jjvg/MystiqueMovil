import { SolicitudPage } from './../solicitud/solicitud';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiciosProvider } from '../../providers/servicios/servicios';
import 'rxjs/add/operator/debounceTime';
import { FormControl } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the ServicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicio',
  templateUrl: 'servicio.html',
})
export class ServicioPage {
  searchTerm: string = '';
    servicios:any;
    searchControl: FormControl;
    searching: any = false;
    rate:any;
    servi:any[];
    errorMessage: string;
    url_file:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataSer: ServiciosProvider,
  public authService:AuthProvider) {

    this.searchControl = new FormControl();
    this.rate=0;
    this.url_file=this.authService.ApiFile();
  }
  doRefresh(refresher){
    this.getServis();
    setTimeout(() => {
      refresher.complete();
    }, 3000);
  }
  ionViewDidLoad() {
    this.getServis();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search  => {
      this.searching = false;
      this.getServis();
      });
   
    this.rate=4; 
  }
  onSearchInput(){
    this.searching = true;
   }
   getServis(){
     this.dataSer.getServicios().subscribe((ser)=>{
       this.servi=ser['data'];
       console.log(this.servi);
       this.servi=this.filterItems(this.searchTerm);
     },(error)=>{
       console.log(error);
     })
   }
  //setFilteredItems(ser) {
   // this.servi = ser
   // }
    gotoSolicitud(){
      this.navCtrl.push(SolicitudPage)
    }
   filterItems(searchTerm){
      return this.servi.filter((item) => {
       return item.nombre.toLowerCase().
       indexOf(searchTerm.toLowerCase()) > -1;// ||
          //item.capital.toLowerCase().
          //indexOf(searchTerm.toLowerCase()) > -1;;
       });
      }
     
}
