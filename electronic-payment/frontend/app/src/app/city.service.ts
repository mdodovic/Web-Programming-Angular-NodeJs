import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }


  fetchAllOrdersService() {
    return this.http.get(`${this.uri}/city/fetchAllCities`);
  }

}
