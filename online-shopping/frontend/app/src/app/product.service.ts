import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  fetchAllProductsService() {
    return this.http.get(`${this.uri}/products/fetchAllProducts`);
  }

  buyProduct(productName, username) {
    const data = {
      name: productName,
      username: username
    }
    return this.http.post(`${this.uri}/products/buyProduct`, data);
  }

  addComment(productForComment, comment) {
    const data = {
      product: productForComment,
      comment: comment
    }
    return this.http.post(`${this.uri}/products/addComment`, data);
  }


  incrementProductNumber(productName) {
    const data = {
      name: productName
    }
    return this.http.post(`${this.uri}/products/incrementProductNumber`, data);

  }
  decrementProductNumber(productName) {
    const data = {
      name: productName
    }
    return this.http.post(`${this.uri}/products/decrementProductNumber`, data);

  }
}
