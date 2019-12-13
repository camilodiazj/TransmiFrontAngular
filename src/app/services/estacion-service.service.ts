import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class EstacionServiceService {
  environment: any;
  constructor(private http: HttpClient) {
    this.environment = environment;
  }

  getAny(pHeader: HttpHeaders): Observable<any> {
    return this.http.get(this.environment.url + "/estaciones", { headers: pHeader, observe: 'response' });
  }

  getAny2(pParam: any, pHeader: HttpHeaders): Observable<any> {
    return this.http.get(this.environment.url + "/estaciones/"+pParam+"/rutas", { headers: pHeader, observe: 'response' });
  }
  
  postAny(pParam: any): Observable<any> {
    return this.http.post(this.environment.url + "/estaciones/", pParam, { observe: 'response' });
  }

  deleteAny(pParam: any, pHeader: HttpHeaders): Observable<any> {
    return this.http.delete(this.environment.url + "/estaciones/"+pParam, { headers: pHeader, observe: 'response' });
  }
 
  putAny(pParam: any): Observable<any> {
    return this.http.put(this.environment.url + "/estaciones/", pParam, { observe: 'response' });
  }

}
