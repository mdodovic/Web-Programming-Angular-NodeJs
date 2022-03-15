import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  fetchBillsByUserService(idU) {
    const data = {
      userId: idU
    }
    return this.http.post(`${this.uri}/bill/fetchBillsByUser`, data);
  }

  payBill(id) {
    const data = {
      id: id
    }
    return this.http.post(`${this.uri}/bill/payBill`, data);
  }

}