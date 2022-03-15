import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';
import { Books } from '../models/books';
import { Order } from '../models/orders';
import { Users } from '../models/users';
import { OrderService } from '../order.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  constructor(private router: Router, private orderService: OrderService, private booksService: BooksService, private usersService: UserService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('logInUser'));
    this.orderService.fetchAllOrdersService().subscribe((orders: Order[]) => {
      this.orders = orders;
      this.booksService.fetchAllBooksService().subscribe((books: Books[]) => {
        for (let i = 0; i < this.orders.length; i++) {
          books.forEach(element => {
            if (element.idK == this.orders[i].knjiga) {
              this.orders[i].ime_knjige = element.naslov;
            }
          });
        }
        this.usersService.fetchAllUsersService().subscribe((users: Users[]) => {
          for (let i = 0; i < this.orders.length; i++) {
            users.forEach(element => {
              if (element.idK == this.orders[i].kupac) {
                this.orders[i].ime_kupca = element.ime;
              }
            });
          }
        })
      })
    })
  }
  user: Users;
  orders: Order[];

  confirm(x) {
    console.log(x);
    this.orderService.updateStatusService(x).subscribe((res) => {
      console.log(res)

    });

    this.orderService.fetchAllOrdersService().subscribe((orders: Order[]) => {
      this.orders = orders;
      this.booksService.fetchAllBooksService().subscribe((books: Books[]) => {
        for (let i = 0; i < this.orders.length; i++) {
          books.forEach(element => {
            if (element.idK == this.orders[i].knjiga) {
              this.orders[i].ime_knjige = element.naslov;
            }
          });
        }
        this.usersService.fetchAllUsersService().subscribe((users: Users[]) => {
          for (let i = 0; i < this.orders.length; i++) {
            users.forEach(element => {
              if (element.idK == this.orders[i].kupac) {
                this.orders[i].ime_kupca = element.ime;
              }
            });
          }
        })
      })
    })

  }
}
