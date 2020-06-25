import { Injectable } from '@angular/core';
import {Vaisseau} from "../models/vaisseau";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";

@Injectable({
  providedIn: 'root'
})
export class VaisseauService {
  apiUrl="http://localhost:3000/vaisseau";
  httpOption= {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })};


  constructor(private http: HttpClient) { }

  retourneVaisseaux():Observable<Vaisseau[]>{
  return this.http.get<Vaisseau[]>(this.apiUrl).pipe(retry(1),catchError(this.handleError));
  }
  retourneUn(id:number): Observable<Vaisseau>{
  return this.http.get<Vaisseau>(this.apiUrl+'/'+id).pipe(retry(1),catchError(this.handleError));
  }

  ajoutVaisseau(newVaisseau: Vaisseau):Observable<Vaisseau>{
  return this.http.post<Vaisseau>(this.apiUrl,newVaisseau,this.httpOption).pipe(catchError(this.handleError));
  }

  delete(id:number): Observable<Vaisseau>{
  return this.http.delete<Vaisseau>(this.apiUrl+'/'+id, this.httpOption).pipe(retry(1),catchError(this.handleError));
  }

  edition (vaisseau: Vaisseau){
  return this.http.put<Vaisseau>(this.apiUrl+'/'+vaisseau.id, vaisseau,this.httpOption).pipe(catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
