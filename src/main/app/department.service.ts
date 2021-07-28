import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDepartment } from './models/department';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private _url = 'http://localhost:9292/department/list';

  constructor(private http: HttpClient) { }

  getAll() : Observable<IDepartment[]>{
    let headers = {};
    let params = {};
    return this.http.get<IDepartment[]>(this._url, {
        headers: headers, params: params
      })
      .pipe(
        map(data => {
          console.log(data)
          return data;
        }),
        catchError((error: HttpErrorResponse) => {
          console.error('error: department list')
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

  private _url2 = 'http://localhost:9292/department/get';

  getById(id:number) : Observable<IDepartment>{
    let headers = {hola:'mundo',};
    let params = {id: id,};
    return this.http.get<IDepartment>(this._url2, {
        headers: headers, params: params
      })
      .pipe(
        map(data => {
          console.log(data)
          return data;
        }),
        catchError((error: HttpErrorResponse) => {
          console.error('error: department list')
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

  private _url3 = 'http://localhost:9292/department/edit';

  edit(department:IDepartment) : Observable<IDepartment>{
    let headers = {
      hola:'mundo',
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    let data = `id=${department.id}&nombre=${department.nombre}`;
    return this.http.post<IDepartment>(this._url3, data, {headers})
      .pipe(
        map(data => {
          console.log(data)
          return data;
        }),
        catchError((error: HttpErrorResponse) => {
          console.error('error: department list')
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
