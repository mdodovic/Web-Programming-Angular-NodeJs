import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { User } from '../models/user';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private productService: ProductService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('loggedInCustomer'));
    this.productService.fetchAllProductsService().subscribe((products: Product[]) => { this.products = products });
    if (this.user.tip != "S") {
      this.router.navigate(['prijava']);
    }
  }

  products: Product[];
  user: User;

  buyProducts() {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].buyProduct) {
        this.productService.buyProduct(this.products[i].naziv, this.user.kor_ime).subscribe(res => { console.log(res) });
        //this.userService.buyProduct(this.user.kor_ime, this.products[i].naziv, this.products[i].kolicina).subscribe(res => { console.log(res) });
      }
    }
    this.productService.fetchAllProductsService().subscribe((products: Product[]) => { this.products = products });
    for (let i = 0; i < this.products.length; i++) {
      this.products[i].buyProduct = false;
    }
  }

  productForComment: string;
  comment: string;

  addComment() {
    this.productService.addComment(this.productForComment, this.comment).subscribe(res => { console.log(res) });
    this.productService.fetchAllProductsService().subscribe((products: Product[]) => { this.products = products });
    this.productForComment = null;
    this.comment = null;
  }

  logOut() {
    this.router.navigate(['']);
  }

}
