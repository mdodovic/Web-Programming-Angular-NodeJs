import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { User } from '../models/user';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private productService: ProductService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('loggedInCustomer'));
    this.productService.fetchAllProductsService().subscribe((products: Product[]) => { this.products = products });
  }

  user: User;
  products: Product[];


  increment(p) {
    this.productService.incrementProductNumber(p.naziv).subscribe(res => { console.log(res) });
    this.productService.fetchAllProductsService().subscribe((products: Product[]) => { this.products = products });
  }
  decrement(p) {
    this.productService.decrementProductNumber(p.naziv).subscribe(res => { console.log(res) });
    this.productService.fetchAllProductsService().subscribe((products: Product[]) => { this.products = products });
  }
}
