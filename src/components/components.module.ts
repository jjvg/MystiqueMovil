import { NgModule } from '@angular/core';
import { ListaPeluqueriaComponent } from './lista-peluqueria/lista-peluqueria';
import { ServrecomendadoComponent } from './servrecomendado/servrecomendado';
import { ArtrecomendadoComponent } from './artrecomendado/artrecomendado';
import { CancelarcitaComponent } from './cancelarcita/cancelarcita';

@NgModule({
	declarations: [
    ListaPeluqueriaComponent,
    ServrecomendadoComponent,
    ArtrecomendadoComponent,
    CancelarcitaComponent,
    ],
	imports: [],
	exports: [
	
    ListaPeluqueriaComponent,
    ServrecomendadoComponent,
    ArtrecomendadoComponent,
    CancelarcitaComponent,
    ]
})
export class ComponentsModule {}
