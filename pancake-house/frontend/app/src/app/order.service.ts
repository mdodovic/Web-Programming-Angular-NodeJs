import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Additionals } from './models/additionals';
import { Order } from './models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  fetchAllOrdersService() {
    return this.http.get(`${this.uri}/orders/fetchAllOrders`);
  }

  finishOrderService(idN, mainProductName, username, choosenAdditionals, today: Date) {
    let orderJson: Order = {
      idN: idN,
      proizvod: mainProductName,
      kupac: username,
      dodaci: [],
      datum: today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate(),
      status: "Neobradjeno",
      ime: "",
      prezime: ""
    }

    choosenAdditionals.forEach(element => {
      let addition: Additionals = {
        naziv: element
      }
      orderJson.dodaci.push(addition)
    });

    console.log(orderJson);

    return this.http.post(`${this.uri}/orders/finishOrder`, orderJson);
  }

  fetchAllOrdersByUserService(username) {
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/orders/fetchAllOrdersByUser`, data);
  }


  refuseOrderService(idN) {
    const data = {
      idN: idN
    }
    return this.http.post(`${this.uri}/orders/refuseOrder`, data);
  }
  acceptOrderService(idN) {
    const data = {
      idN: idN
    }
    return this.http.post(`${this.uri}/orders/acceptOrder`, data);
  }
}
