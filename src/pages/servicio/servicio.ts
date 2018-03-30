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
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataSer: ServiciosProvider) {

    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    this.setFilteredItems();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search  => {
      this.searching = false;
      this.setFilteredItems();
      });
    console.log('ionViewDidLoad ServicioPage');
  }
  onSearchInput(){
    this.searching = true;
   }
  setFilteredItems() {
    this.servicios = this.dataSer.filterItems(this.searchTerm);
    }
}
