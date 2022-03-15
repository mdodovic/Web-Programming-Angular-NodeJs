import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';
import { Books } from '../models/books';
import { Users } from '../models/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private booksService: BooksService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('logInUser'));
    this.booksService.fetchAllBooksService().subscribe((data: Books[]) => {
      this.books = data;
      this.originalBooks = data;
      console.log(this.books)
    })
  }
  user: Users;
  books: Books[]
  originalBooks: Books[]
  errorMessage: string;
  titleSearch: string;
  authorSearch: string;

  buyBook(b: Books) {
    if (!this.user) {
      this.errorMessage = "Morate biti ulogovani!";
    } else {
      console.log(b);
      localStorage.setItem('wantedBook', JSON.stringify(b));
      this.router.navigate(['buyBooks/' + b.idK]);
    }
  }

  sort() {
    this.books.sort((a: Books, b: Books) => {
      if (a.godina > b.godina) {
        return -1;
      }
      if (a.godina < b.godina) {
        return 1;
      }
      return 0;
    })
  }

  find() {
    this.books = [];

    if (!this.authorSearch && !this.titleSearch) {
      console.log(0);
      this.books = this.originalBooks;
    } else
      if (!this.authorSearch && this.titleSearch) {
        console.log(this.authorSearch);
        this.originalBooks.forEach(element => {
          if (element.naslov == this.titleSearch) {
            this.books.push(element);
          }
        });
      } else
        if (!this.titleSearch && this.authorSearch) {
          console.log(this.titleSearch);
          this.originalBooks.forEach(element => {
            if (element.autor == this.authorSearch) {
              this.books.push(element);
            }
          });
        } else
          if (this.titleSearch && this.titleSearch) {
            console.log(this.titleSearch);
            console.log(this.authorSearch);
            this.originalBooks.forEach(element => {
              if (element.autor == this.authorSearch && element.naslov == this.titleSearch) {
                this.books.push(element);
              }
            });
          }
  }


  singOut() {
    localStorage.removeItem('logInUser');
    let u = JSON.parse(localStorage.getItem('logInUser'));
    console.log(u);
    this.user = JSON.parse(localStorage.getItem('logInUser'));
    this.booksService.fetchAllBooksService().subscribe((data: Books[]) => {
      this.books = data;
      this.originalBooks = data;
      console.log(this.books)
    })

  }
}
