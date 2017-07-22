import { Component, OnInit } from '@angular/core';
import {SoporteService} from '../../services/soporte.service';
import {Observable} from 'rxjs/Observable';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    tags: any;
    totalTagsConCarga = 0;
    totalTagsSinCarga = 0;
    totalTagsSinPosicionActual = 0;
    totalTagsAsignados = 0;
    errorServicio: any;
  constructor(private _soporteService: SoporteService) {
      this.obtenerTAGsConCarga();
      this.obtenerTAGsSinCarga();
      this.obtenerTAGsSinPosicionActual();
      this.obtenerTAGsAsignados();
      IntervalObservable.create(300000).subscribe(() => this.obtenerTAGsConCarga());
      IntervalObservable.create(300000).subscribe(() => this.obtenerTAGsSinCarga());
      IntervalObservable.create(300000).subscribe(() => this.obtenerTAGsSinPosicionActual());
      IntervalObservable.create(300000).subscribe(() => this.obtenerTAGsAsignados());
  }

  ngOnInit() {
  }

  obtenerDatosDashboard() {
  }

  obtenerTAGsConCarga(): void {
    this._soporteService.getTAGsCargados()
        .then(
            request => {
                this.totalTagsConCarga = request.listaRastreadores.length;
            },
            error => this.errorServicio = <any>error);
  }

  obtenerTAGsSinCarga(): void {
    this._soporteService.getTAGsDescargados()
        .then(
            request => {
                this.totalTagsSinCarga = request.listaRastreadores.length;
            },
            error => this.errorServicio = <any>error);
  }

  obtenerTAGsSinPosicionActual(): void {
    this._soporteService.getTAGsSinPosicionActual()
        .then(
            request => {
                this.totalTagsSinPosicionActual = request.listaRastreadores.length;
            },
            error => this.errorServicio = <any>error);
  }

  obtenerTAGsAsignados(): void {
    this._soporteService.getTAGsAsignados()
        .then(
            request => {
                this.totalTagsAsignados = request.listaRastreadores.length;
            },
            error => this.errorServicio = <any>error);
  }


}
