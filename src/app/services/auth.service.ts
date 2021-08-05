import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// const AUTH_API = "https://cors-anywhere.herokuapp.com/https://covy.herokuapp.com/api/";
// const AUTH_API = "https://cors-anywhere.herokuapp.com/https://djangoangulartest.herokuapp.com/user/";

const AUTH_API = "https://djangoangulartest.herokuapp.com/user/";



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login/', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, phone: string, role: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'register/', {
      username,
      email,
      phone,
      role,
      password
    }, httpOptions);
  }

  signOut(): void {
    window.sessionStorage.clear();
  }

}