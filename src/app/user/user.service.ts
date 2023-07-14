import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions: Object = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    responseType: 'text'
  }


  private userUrl = "http://localhost:8082";
  constructor(private httpClient: HttpClient) { }
  login(loginForm: Login): Observable<string> {
    return this.httpClient.post<string>(this.userUrl+"/login", JSON.stringify(loginForm), this.httpOptions);
  }
  registerUser(userForm: User): Observable<string> {
    return this.httpClient.post<string>(this.userUrl+"/customer/v1/user", JSON.stringify(userForm), this.httpOptions);
  }
  
}
