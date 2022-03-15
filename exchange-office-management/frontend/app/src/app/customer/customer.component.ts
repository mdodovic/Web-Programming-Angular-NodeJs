import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExchangeRate } from '../models/ExchangeRates';
import { User } from '../models/User';
import { RatesService } from '../rates.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private router: Router, private rateService: RatesService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('loggedInUser'));
    this.transactionMessage = localStorage.getItem('transactionMessage');
    this.rateService.fetchAllExchangeRatesService().subscribe((rates: ExchangeRate[]) => {
      this.rates = rates;
      console.log(this.rates);
      console.log(rates);
    })
    console.log(this.transactionMessage);
    console.log(this.user);
  }

  user: User = null;
  rates: ExchangeRate[] = [];
  transactionMessage: string = "";

  logOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  startTransaction() {
    localStorage.removeItem('transactionMessage');
    this.router.navigate(['transaction/' + this.user.kor_ime]);
  }
}
