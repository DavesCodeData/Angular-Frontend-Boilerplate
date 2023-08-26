import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';//HttpHeaders is to import json

import { Observable } from 'rxjs';
import { first, catchError } from 'rxjs/operators';

import {User } from '../models/Users'//import user info
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:3000/students";//use HttpClient you should connect this to the restapi-copy

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };
//we need the functionality of an http server so it is injected below
  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) { }

  login(user: Omit<User, "studentid">): Observable<User> {//observable() is imported above
    return this.http.post<User>(this.url, user, this.httpOptions).pipe(
      first(),//first() imported above
      catchError(this.errorHandlerService.handleError<User>("login"))//pass in the type of error
    );
  }
}
