import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient, private router: Router) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  token = localStorage.getItem('token');
  url = environment.url;
  getlogin(login) {
    return this.http.post(this.url + 'login', login, this.httpOptions);
  }
  getTokenDecode(token) {
    return this.http.post(this.url + 'login/decode', token, this.httpOptions);
  }

  checkLogin(): boolean {
    if (!this.token) {
      this.router.navigateByUrl('login');
    } else {
      return true;
    }
  }
}
