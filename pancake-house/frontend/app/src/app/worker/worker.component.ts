import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../models/order';
import { User } from '../models/user';
import { OrderService } from '../order.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  constructor(private router: Router, private orderService: OrderService, private userService: UserService) { }

  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem('logInUser'));
    this.orderService.fetchAllOrdersService().subscribe((orders: Order[]) => {
      this.orders = orders;
      this.userService.fetchAllUsersService().subscribe((users: User[]) => {
        console.log(this.orders);
        console.log(users);
        for (let i = 0; i < this.orders.length; i++) {
          for (let j = 0; j < users.length; j++) {
            if (this.orders[i].kupac == users[j].kor_ime) {
              this.orders[i].ime = users[j].ime;
              this.orders[i].prezime = users[j].prezime;
            }
          }
        }
      })
    })
  }
  user: User;
  orders: Order[];

  refuseOrder(idN) {
    this.orderService.refuseOrderService(idN).subscribe(res => console.log(res))
    this.orderService.fetchAllOrdersService().subscribe((orders: Order[]) => {
      this.orders = orders;
    })
  }
  acceptOrder(idN) {
    this.orderService.acceptOrderService(idN).subscribe(res => console.log(res))
    this.orderService.fetchAllOrdersService().subscribe((orders: Order[]) => {
      this.orders = orders;
      this.userService.fetchAllUsersService().subscribe((users: User[]) => {
        console.log(this.orders);
        console.log(users);
        for (let i = 0; i < this.orders.length; i++) {
          for (let j = 0; j < users.length; j++) {
            if (this.orders[i].kupac == users[j].kor_ime) {
              this.orders[i].ime = users[j].ime;
              this.orders[i].prezime = users[j].prezime;
            }
          }
        }
      })
    })
  }
  logOut() {
    localStorage.clear()
    this.router.navigate(['']);
  }

}
