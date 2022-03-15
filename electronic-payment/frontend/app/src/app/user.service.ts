import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  signInService(city, address, flatNumber, pin) {
    const data = {
      city: city,
      address: address,
      flatNumber: flatNumber,
      pin: pin
    }
    return this.http.post(`${this.uri}/users/login`, data);
  }

  payBills(id, money) {
    const data = {
      id: id,
      money: money
    }
    return this.http.post(`${this.uri}/users/payBills`, data);
  }
}

