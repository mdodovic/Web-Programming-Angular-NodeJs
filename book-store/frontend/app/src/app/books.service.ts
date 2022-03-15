import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }


  fetchAllBooksService() {

    return this.http.get(`${this.uri}/books/fetchAllBooks`);

  }

  updateNumberService(idB, amount) {
    const data = {
      idB: idB,
      amount: amount
    }
    return this.http.post(`${this.uri}/books/updateNumber`, data);
  }

}
