import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  saveOrderService(idN, idC, idB, amount) {
    const data = {
      idN: idN,
      kupac: idC,
      knjiga: idB,
      kolicina: amount,
      status: "Naruceno"
    }

    return this.http.post(`${this.uri}/orders/saveOrder`, data);

  }

  fetchAllOrdersService() {

    return this.http.get(`${this.uri}/orders/fetchAllOrders`);

  }
  updateStatusService(idO) {
    const data = {
      idO: idO
    }
    return this.http.post(`${this.uri}/orders/updateStatus`, data);
  }


}
