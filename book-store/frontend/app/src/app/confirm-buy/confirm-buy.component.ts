import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../books.service';
import { Books } from '../models/books';
import { Order } from '../models/orders';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-confirm-buy',
  templateUrl: './confirm-buy.component.html',
  styleUrls: ['./confirm-buy.component.css']
})
export class ConfirmBuyComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private bookService: BooksService, private orderService: OrderService) { }


  ngOnInit(): void {
    this.amount = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('amount'));
    this.book = JSON.parse(localStorage.getItem('wantedBook'));
    console.log(this.book.idK);
    this.price = this.amount * this.book.brStr;
  }
  book: Books;
  price: number;
  amount: number;

  confirmBought() {
    console.log('confirm');

    this.orderService.fetchAllOrdersService().subscribe((orders: Order[]) => {
      console.log(orders.length);
      let u = JSON.parse(localStorage.getItem('logInUser'));
      this.orderService.saveOrderService(orders.length + 1, u.idK, this.book.idK, this.amount).subscribe(res => {
        console.log(res)
        this.bookService.updateNumberService(this.book.idK, this.book.naStanju - this.amount).subscribe(res => {
          console.log(res)
          localStorage.removeItem('wantedBook');
          this.router.navigate(['']);
        })
      })
    })
  }
}
