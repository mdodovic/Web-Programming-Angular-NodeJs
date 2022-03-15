import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  fetchAllOrdersService() {
    return this.http.get(`${this.uri}/orders/fetchAllOrders`);
  }

  addOrder(id, username, orderName, partName, orderType) {
    const data = {
      id: id,
      serviser: username,
      naziv: orderName,
      deo: partName,
      status: orderType
    }
    return this.http.post(`${this.uri}/orders/addOrder`, data);
  }

  changeStatus(orderId, value) {
    const data = {
      id: orderId,
      status: value
    }
    return this.http.post(`${this.uri}/orders/changeStatus`, data);
  }
}
