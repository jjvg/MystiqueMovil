import { NgModule } from '@angular/core';
import { ListaPeluqueriaComponent } from './lista-peluqueria/lista-peluqueria';
import { ServrecomendadoComponent } from './servrecomendado/servrecomendado';
import { ArtrecomendadoComponent } from './artrecomendado/artrecomendado';
import { CancelarcitaComponent } from './cancelarcita/cancelarcita';
import { RechazoComponent } from './rechazo/rechazo';

@NgModule({
	declarations: [
    ListaPeluqueriaComponent,
    ServrecomendadoComponent,
    ArtrecomendadoComponent,
    CancelarcitaComponent,
    RechazoComponent,
    ],
	imports: [],
	exports: [
	
    ListaPeluqueriaComponent,
    ServrecomendadoComponent,
    ArtrecomendadoComponent,
    CancelarcitaComponent,
    RechazoComponent,
    ]
})
export class ComponentsModule {}
