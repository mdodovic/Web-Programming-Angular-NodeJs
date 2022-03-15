import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }


  findCoffeeByNameService(namePattern) {
    const data = {
      namePattern: namePattern
    }

    return this.http.post(`${this.uri}/coffee/findCoffeeByName`, data);

  }
  findCoffeeByIdService(id) {
    const data = {
      id: id
    }

    return this.http.post(`${this.uri}/coffee/findCoffeeById`, data);

  }

  fetchAdditionsService() {
    return this.http.get(`${this.uri}/coffee/fetchAdditions`);
  }

  addOrderService(owner, items) {
    let today = new Date();

    const data = {
      narucio: owner,
      aktivna: true,
      datum: today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate(),
      stavke: items
    }
    return this.http.post(`${this.uri}/order/addOrder`, data);
  }

}
