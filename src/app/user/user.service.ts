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
    //responseType: 'text'
  }


  private userUrl = "http://localhost:8082/customer/v1";
  constructor(private httpClient: HttpClient) { }

  login(loginForm: Login): Observable<string> {
    return this.httpClient.post<string>(this.userUrl + "http://localhost:8082/login", JSON.stringify(loginForm), this.httpOptions);
  }

  registerUser(userForm: User): Observable<string> {
    return this.httpClient.post<string>(this.userUrl + "/user", JSON.stringify(userForm), this.httpOptions);
  }

  updateUserDetails(user: any, userId: number): Observable<string> {
    return this.httpClient.put<string>(this.userUrl + "/user" + userId, JSON.stringify(user), this.httpOptions);

  }

  deleteUser(userId: number): Observable<string> {
    return this.httpClient.delete<string>(this.userUrl + "/user/" + userId, this.httpOptions);
  }

  listAllUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.userUrl + "/users", this.httpOptions);
  }

  getUserDetailsByUserId(userId: number): Observable<User> {
    return this.httpClient.get<User>(this.userUrl + "/user/" + userId, this.httpOptions);

  }
}
