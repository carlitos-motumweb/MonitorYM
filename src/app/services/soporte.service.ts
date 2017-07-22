import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SoporteService {

  constructor(private http: Http) { }

  getTAGsCargados() {
    return this.http.get('http://localhost:8080/IntegracionYMAC/resources/soporte_tags/con_carga_minima?user=981b1a80a1cd0b0e8fe7343b4e28d29187f38bcb&psw=981b1a80a1cd0b0e8fe7343b4e28d29187f38bcb&flota=GMODELO&planta=450')
      .toPromise()
      .then(this.extractData)
      .catch(this.handlerError);
  }

  getTAGsDescargados() {
    return this.http.get('http://localhost:8080/IntegracionYMAC/resources/soporte_tags/sin_carga_minima?user=981b1a80a1cd0b0e8fe7343b4e28d29187f38bcb&psw=981b1a80a1cd0b0e8fe7343b4e28d29187f38bcb&flota=GMODELO&planta=450')
      .toPromise()
      .then(this.extractData)
      .catch(this.handlerError);
  }

  getTAGsSinPosicionActual() {
    return this.http.get('http://localhost:8080/IntegracionYMAC/resources/soporte_tags/sin_posicion_actual?user=981b1a80a1cd0b0e8fe7343b4e28d29187f38bcb&psw=981b1a80a1cd0b0e8fe7343b4e28d29187f38bcb&flota=GMODELO&planta=450')
      .toPromise()
      .then(this.extractData)
      .catch(this.handlerError);
  }

  getTAGsAsignados() {
    return this.http.get('http://localhost:8080/IntegracionYMAC/resources/soporte_tags/asignados?user=981b1a80a1cd0b0e8fe7343b4e28d29187f38bcb&psw=981b1a80a1cd0b0e8fe7343b4e28d29187f38bcb&flota=GMODELO&planta=450')
      .toPromise()
      .then(this.extractData)
      .catch(this.handlerError);
  }

  private extractData(res: Response) {
    const body = res.json();
    console.log('body: ', body);
    if (body == null) {
      return {};
    } else {
      return body;
    }
    //   if (body.status == 200) {
    //     return body.result;
    //   } else {
    //     return {};
    //   }

  }

  private handlerError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const er = body.error || JSON.stringify(body);
      errMsg = `${error.status} -- ${error.statusText || ''} ${error}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    return Observable.throw(errMsg);
  }
}
