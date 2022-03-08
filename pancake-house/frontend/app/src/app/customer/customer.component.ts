import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainProducts } from '../models/mainProducts';
import { Order } from '../models/order';
import { User } from '../models/user';
import { OrderService } from '../order.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private router: Router, private productsService: ProductsService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('logInUser'));
    let hasToken = JSON.parse(localStorage.getItem('customerToken'));
    if (hasToken != null) {
      this.token = true;
    } else {
      this.token = false;
    }
    this.productsService.fetchAllMainProductsService().subscribe((products: MainProducts[]) => {
      this.mainProducts = products;
    })
    this.orderService.fetchAllOrdersByUserService(this.user.kor_ime).subscribe((orders: Order[]) => {
      this.orders = orders;
    })
  }
  token: boolean
  user: User
  mainProducts: MainProducts[];
  choosenMainProduct: string;
  orders: Order[]

  chooseAdditionals() {
    console.log(this.choosenMainProduct);
    this.router.navigate(['additionals/' + this.choosenMainProduct]);
  }

  logOut() {
    localStorage.clear()
    this.router.navigate(['']);
  }
}
