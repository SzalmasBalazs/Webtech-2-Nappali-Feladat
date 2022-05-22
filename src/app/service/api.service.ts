import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUri = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser= new User();

  constructor(private http: HttpClient) { }

  createUser(data): Observable<any> {
    const url = `${this.baseUri}/addUser`;
    return this.http.post(url, data).pipe(
      catchError(this.errorMgmt)
    );
  }

  getUsers() {
    return this.http.get(`${this.baseUri}/getallUser`);
  }

  getUser(id): Observable<any> {
    const url = `${this.baseUri}/getUser/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  updateUser(id, data): Observable<any> {
    const url = `${this.baseUri}/updateUser/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    );
  }

  deleteUser(id): Observable<any> {
    const url = `${this.baseUri}/deleteUser/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    );
  }

  createFigure(data): Observable<any> {
    const url = `${this.baseUri}/addFigure`;
    return this.http.post(url, data).pipe(
      catchError(this.errorMgmt)
    );
  }

  getFigures() {
    return this.http.get(`${this.baseUri}/getallFigures`);
  }

  getFigure(id): Observable<any> {
    const url = `${this.baseUri}/getFigures/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  updateFigure(id, data): Observable<any> {
    const url = `${this.baseUri}/updateFigures/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    );
  }

  deleteFigure(id): Observable<any> {
    const url = `${this.baseUri}/deleteFigure/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    );
  }

  setCurrentuser(user){
    this.currentUser=user;
  }

  getCurrentuser(){
    return this.currentUser;
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
