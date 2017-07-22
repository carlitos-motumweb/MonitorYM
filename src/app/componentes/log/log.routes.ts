import { Routes } from '@angular/router';
import {PorPlacaComponent} from './por-placa.component';
import {PorTagComponent} from './por-tag.component';
import {PorOperacionComponent} from './por-operacion.component';


export const LOG_ROUTES: Routes = [
    { path: 'placa', component: PorPlacaComponent },
    { path: 'tag', component: PorTagComponent },
    { path: 'operacion', component: PorOperacionComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'placa' }
];
