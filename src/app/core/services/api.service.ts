import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { GeneralResponse } from '../models/general-response';
import { share } from 'rxjs/operators';

class Observer {
  next!: Function;
  error!: Function;
  complete!: Function;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getByModel<T>(url: string,params?:any): Observable<any> {

    return this.http.get<any>(url,{params: params});
  }
  getById<T>(url: string): Observable<T> {

    let response = this.http.get<GeneralResponse<T>>(url).pipe(share());

    return Observable.create((observer: Observer) => {
      response.subscribe(response => {
  
          observer.next(response);
        
        observer.complete();
      }, error => {
        observer.error(new HttpErrorResponse( error));
      });
    });

  }

post<T>(url: string, body?: object): Observable<T> {
  
  let response = this.http
    .post<GeneralResponse<T>>(url, body).pipe(share());

  return Observable.create((observer: Observer) => {
    response.subscribe(res => {
        observer.next(res);
      observer.complete();
    }, error => {
      observer.error(new HttpErrorResponse( error));
    });
  });

}
put<T>(url: string, body: object): Observable<T> {
  
  let response = this.http
    .put<GeneralResponse<T>>(url, body).pipe(share());

  return Observable.create((observer: Observer) => {
    response.subscribe(res => {
    
      observer.next(res);
      observer.complete();
    }, error => {

      observer.error(
       new HttpErrorResponse( error)
         );

    });
  });

}

deleteByModel<T>(url: string,options?:any): Observable<T> {
  
  let response = this.http
    .delete<GeneralResponse<T>>(url,options).pipe(share());

  return Observable.create((observer: Observer) => {
    response.subscribe(res => {
    
        observer.next(res);
      observer.complete();
    }, error => {
      
      observer.error( new HttpErrorResponse( error) );
     // throw new HttpErrorResponse( error);
     });
  });

}
}
