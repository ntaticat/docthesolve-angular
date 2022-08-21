import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IIncidence } from '../interfaces/incidences.interfaces';

@Injectable({
  providedIn: 'root'
})
export class IncidencesService {

  private uri = environment.backendUri;

  constructor(private http: HttpClient) { }

  getIncidences(): Observable<IIncidence[]> {
    const url = `${this.uri}/incidences`;
    return this.http.get<IIncidence[]>(url)
      .pipe(
        catchError((err) => {
          console.warn("Error caught in Incidences Service");
          console.error(err);
          return throwError(() => err);
        })
      )
    ;
  }
}
