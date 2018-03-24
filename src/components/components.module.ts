import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar';
import { ListaPeluqueriaComponent } from './lista-peluqueria/lista-peluqueria';
@NgModule({
	declarations: [NavbarComponent,
    ListaPeluqueriaComponent],
	imports: [],
	exports: [
		NavbarComponent,
    ListaPeluqueriaComponent]
})
export class ComponentsModule {}
