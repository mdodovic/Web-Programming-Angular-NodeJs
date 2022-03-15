import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatesService {

  uri = 'http://localhost:4000'


  constructor(private http: HttpClient) { }

  fetchAllExchangeRatesService() {
    console.log('fetch all exchgangeRates');
    return this.http.get(`${this.uri}/rates/fetchAllExchangeRates`);


  }

  setMoney(exchangeRate, newMoney) {
    const data = {
      exchangeRate: exchangeRate,
      newMoney: newMoney
    }
    console.log(data);
    return this.http.post(`${this.uri}/rates/setMoney`, data);
  }

}
