import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  serviceproperty = "Service Created";
  SignupURL ="http://localhost:3000/api/Signup/";
  i4UURL ="http://localhost:3000/api/I4u/";

  constructor(private http : HttpClient) { }

  getSignup()
  {
    return this.http.get<any>(this.SignupURL + 'retrieve');
  }

  InsertSignup(emp : any) : Observable<any> {
    const Header = { headers : new HttpHeaders({ 'Content-Type' : 'application/json' })};
    return this.http.post<any>(this.SignupURL + 'create',emp,Header);
  }
  InsertI4u(emp : any) : Observable<any> {
    const Header = { headers : new HttpHeaders({ 'Content-Type' : 'application/json' })};
    return this.http.post<any>(this.i4UURL + 'create',emp,Header);
  }
}