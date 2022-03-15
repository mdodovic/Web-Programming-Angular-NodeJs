import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }


  fetchAllOrdersService() {
    return this.http.get(`${this.uri}/order/fetchAllOrders`);
  }

  finishOrder(idOfOrder) {

    const data = {
      id: idOfOrder
    }
    return this.http.post(`${this.uri}/order/finishOrder`, data);
  }
}
