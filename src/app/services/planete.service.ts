import { Injectable } from '@angular/core';
import {Planete} from "../models/planete";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {throwError, Observable} from "rxjs";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PlaneteService {
  ApiUrl="http://localhost:3000/planete";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })};


  constructor(private http: HttpClient) {}

  retournePlanetes():Observable<Planete[]>{
    return this.http.get<Planete[]>(this.ApiUrl)
      .pipe(
         retry(1),
        catchError(this.handleError)
    );
  }

  retourneUne(id:number): Observable<Planete>{
    return this.http.get<Planete>(this.ApiUrl+'/'+id)
      .pipe(
        retry(1),catchError(this.handleError)
      );
  }

  ajoutPlanete(newPlanete: Planete):Observable<Planete>{
    return this.http.post<Planete>(this.ApiUrl, newPlanete, this.httpOptions).pipe(catchError(this.handleError))
  }

  supprimer(id:number):Observable<Planete>{
    return this.http.delete<Planete>(this.ApiUrl+'/'+id,this.httpOptions).pipe(retry(1),catchError(this.handleError))
  };

  edition(planete:Planete) {
    return this.http.put<Planete>(this.ApiUrl+'/'+planete.id,planete,this.httpOptions).pipe(catchError(this.handleError));
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
