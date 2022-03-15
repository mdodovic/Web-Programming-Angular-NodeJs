import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../model/order';
import { User } from '../model/User';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private orderService: OrderService) { }

  ngOnInit(): void {
    this.admin = JSON.parse(localStorage.getItem('logInUser'));
    this.orderService.fetchAllOrdersService().subscribe((data: Order[]) => this.orders = data)
    console.log(this.orders);
  }

  orders: Order[];
  admin: User;

  logOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  finishOrder(idOfOrder) {
    console.log(idOfOrder)
    this.orderService.finishOrder(idOfOrder).subscribe(res => {
      console.log(res);
    });
    this.orderService.fetchAllOrdersService().subscribe((data: Order[]) => this.orders = data)
  }
}
