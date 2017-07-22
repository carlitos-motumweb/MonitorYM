import { Routes } from '@angular/router';
import {CerrarOperacionComponent} from './cerrar-operacion.component';
import {CrearOperacionTagComponent} from './crear-operacion-tag.component';
import {CrearTagComponent} from './crear-tag.component';
import {HabilitarTagComponent} from './habilitar-tag.component';
import {LiberarTagComponent} from './liberar-tag.component';


export const SOPORTE_ROUTES: Routes = [
    { path: 'cerrarOperacion', component: CerrarOperacionComponent },
    { path: 'crearOperacionTag', component: CrearOperacionTagComponent },
    { path: 'crearTag', component: CrearTagComponent },
    { path: 'habilitarTag', component: HabilitarTagComponent },
    { path: 'liberarTag', component: LiberarTagComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
