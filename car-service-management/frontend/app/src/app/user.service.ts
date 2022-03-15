import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }


  signInService(username, password, type) {
    const data = {
      username: username,
      password: password,
      type: type
    }

    return this.http.post(`${this.uri}/users/login`, data);
  }
}
