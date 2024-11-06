import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
  HttpHeaders,
} from '@angular/common/http';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(
    private _http: HttpClient,
    private service:ServiceService

  ) { }
  callApi({
    url,
    method,
    body = null,
  }: {
    url: string;
    method: string;
    body?: any;
  }): Observable<any> {
    switch (method.toUpperCase())
     {
      case 'LOGIN':
        console.log(url, {edc: this.service.encrypt(JSON.stringify(body))})
        return this._http.post(url, {edc: this.service.encrypt(JSON.stringify(body))})
      
      case 'GET':
      return this._http.get(url)

      case 'POST':
        console.log(url, {edc: this.service.encrypt(JSON.stringify(body))})
        return this._http.post(url, {edc: this.service.encrypt(JSON.stringify(body))})
          .pipe(
            catchError((error) => {
              console.log(error);
              return of(false);
            })
          );
        break;
    }
      
    return new Observable((observer) => observer.error(new Error('false')));
  }
}
