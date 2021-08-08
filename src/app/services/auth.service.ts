import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

// const AUTH_API = "https://cors-anywhere.herokuapp.com/https://covy.herokuapp.com/api/";
// const AUTH_API = "https://cors-anywhere.herokuapp.com/https://djangoangulartest.herokuapp.com/user/";

const AUTH_API = "http://127.0.0.1:8000/user/";

const AUTH_url = "http://127.0.0.1:8000/";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,private router: Router,) { }

  // login(username: string, password: string): Observable<any> {
  //   return this.http.post(AUTH_url + 'token/', {
  //     username,
  //     password
  //   }, httpOptions);
  // }

  register(username: string, email: string, phone: string, role: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'register/', {
      username,
      email,
      phone,
      role,
      password
    }, httpOptions);
  }


  login(userdata): Observable<any> {
    return this.http.post(AUTH_url + 'token/', userdata)
  }

  signOut(): void {
    localStorage.clear();
    this.router.navigate(['/']);

  }

}