import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../books.service';
import { Books } from '../models/books';

@Component({
  selector: 'app-buy-books',
  templateUrl: './buy-books.component.html',
  styleUrls: ['./buy-books.component.css']
})
export class BuyBooksComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private bookService: BooksService) { }


  ngOnInit(): void {
    this.bookId = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('idB'));
    this.book = JSON.parse(localStorage.getItem('wantedBook'));
    console.log(this.bookId);
    console.log(this.book.idK);
  }
  bookId: number;
  book: Books;

  amount: number;
  errorMessage: string;
  buy() {
    this.errorMessage = null;
    console.log(this.amount);

    if (this.book.naStanju >= this.amount) {
      this.router.navigate(['confirm/' + this.amount])
    } else {
      this.errorMessage = "Nema dovoljno na stanju!";
    }
  }
}
