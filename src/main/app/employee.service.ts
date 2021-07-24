import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './models/employee';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url = 'http://localhost:9292/employee/list';

  constructor(private http: HttpClient) { }

  getAll() : Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
      .pipe(
        map(data => {
          console.log(data)
          return data;
        }),
        catchError((error: HttpErrorResponse) => {
          console.error('error: employee list')
          console.log(error)
          let message = {
            status: error.status,
            text: error.error,
          };
          console.log(message)
          return throwError(message || 'Server error');
        }) 
      )
  }
}
