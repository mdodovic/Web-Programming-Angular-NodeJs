import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }


  fetchAllMainProductsService() {
    return this.http.get(`${this.uri}/products/fetchAllMainProducts`);
  }

  fetchAllAdditionalsService() {
    return this.http.get(`${this.uri}/products/fetchAllAdditionals`);
  }



}


