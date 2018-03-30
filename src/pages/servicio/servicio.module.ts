import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicioPage } from './servicio';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    ServicioPage,
  ],
  imports: [
    IonicPageModule.forChild(ServicioPage),
  ],
})
export class ServicioPageModule {}
