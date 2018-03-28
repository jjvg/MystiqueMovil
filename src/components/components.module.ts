import { NgModule } from '@angular/core';
import { ListaPeluqueriaComponent } from './lista-peluqueria/lista-peluqueria';
import { ServrecomendadoComponent } from './servrecomendado/servrecomendado';
import { ArtrecomendadoComponent } from './artrecomendado/artrecomendado';
@NgModule({
	declarations: [
    ListaPeluqueriaComponent,
    ServrecomendadoComponent,
    ArtrecomendadoComponent],
	imports: [],
	exports: [
	
    ListaPeluqueriaComponent,
    ServrecomendadoComponent,
    ArtrecomendadoComponent]
})
export class ComponentsModule {}
