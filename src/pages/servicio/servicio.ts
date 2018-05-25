import { SolicitudPage } from './../solicitud/solicitud';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiciosProvider } from '../../providers/servicios/servicios';
import 'rxjs/add/operator/debounceTime';
import { FormControl } from '@angular/forms';
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
    servi:any;
    errorMessage: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataSer: ServiciosProvider) {

    this.searchControl = new FormControl();
    this.rate=0;
  }

  ionViewDidLoad() {
    this.setFilteredItems();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search  => {
      this.searching = false;
      this.setFilteredItems();
      });
    //this.getCiudad();
   
    this.rate=4;
  
    console.log('ionViewDidLoad ServicioPage');
    //console.log(this.servi); 
  }
  onSearchInput(){
    this.searching = true;
   }
  setFilteredItems() {
    this.servicios = this.dataSer.filterItems(this.searchTerm);
    }
    gotoSolicitud(){
      this.navCtrl.push(SolicitudPage)
    }
   /* filterItems2(searchTerm){
      return this.servi.filter((item) => {
       return item.name.toLowerCase().
       indexOf(searchTerm.toLowerCase()) > -1 ||
          item.capital.toLowerCase().
          indexOf(searchTerm.toLowerCase()) > -1;;
       });
      }*/
     /* getCiudad(){
        this.dataSer.getCountries().subscribe(
          (data)=>{
            this.servi = data;
            console.log(this.servi);
            this.setFilteredItems();
            this.searchControl.valueChanges.debounceTime(700).subscribe(search  => {
              this.searching = false;
              this.setFilteredItems();
              });
          },(error) =>{ 
            this.errorMessage=<any>error});
      }*/
}
