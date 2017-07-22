import { RouterModule, Routes } from '@angular/router';

import {LogComponent} from './componentes/log/log.component';
import {DashboardComponent} from './componentes/dashboard/dashboard.component';
import {SoporteComponent} from './componentes/soporte/soporte.component';

import {LOG_ROUTES} from './componentes/log/log.routes';
import {SOPORTE_ROUTES} from './componentes/soporte/soporte.routes';

const APP_ROUTES: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'log', component: LogComponent , children: LOG_ROUTES},
  { path: 'soporte', component: SoporteComponent, children: SOPORTE_ROUTES },
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
