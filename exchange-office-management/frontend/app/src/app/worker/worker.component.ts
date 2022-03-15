import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExchangeRate } from '../models/ExchangeRates';
import { ExchangeTransaction } from '../models/ExchangeTransaction';
import { User } from '../models/User';
import { RatesService } from '../rates.service';
import { TransactionService } from '../transaction.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  constructor(private router: Router, private rateService: RatesService, private transactionService: TransactionService, private userService: UserService) { }



  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('loggedInUser'));
    this.transactionService.fetchAllTransactionsService().subscribe((exchangeTransactions: ExchangeTransaction[]) => {
      this.exchangeTransactions = exchangeTransactions;
    })
    this.userService.fetchAllUsers().subscribe((users: User[]) => {
      this.customers = users;
      console.log(users);

      this.exchangeTransactions.forEach(element => {
        for (let i = 0; i < users.length; i++) {

          if (element['kupac'] == users[i]['kor_ime']) {
            element.ime = users[i].ime;
            element.prezime = users[i].prezime;
          }
        }
      });
    })
    this.rateService.fetchAllExchangeRatesService().subscribe((exr: ExchangeRate[]) => {
      this.exchangeRates = exr;
    })
    console.log(this.exchangeTransactions);
    console.log(this.customers);
  }

  user: User;
  customers: User[];
  exchangeTransactions: ExchangeTransaction[];
  exchangeRates: ExchangeRate[];

  closeTransaction(e) {
    this.exchangeRates.forEach(element => {
      if (element['valuta'] == e['zeljena_valuta']) {
        console.log(element['stanje'])
        console.log(e['posle_konverzije'])
        if (element['stanje'] < e['posle_konverzije']) {
          this.transactionService.setTransactionStatus(e['idT'], 'Odbijeno').subscribe(data => { console.log(data) });
        } else {

          for (let i = 0; i < this.exchangeRates.length; i++) {
            if (this.exchangeRates[i]['valuta'] == e['trenutna_valuta']) {
              let newFromMoney = this.exchangeRates[i]['stanje'] + e['za_konverziju'];
              this.rateService.setMoney(this.exchangeRates[i]['valuta'], newFromMoney).subscribe(data => { console.log(data) });
            }
          }
          let newToMoney = element['stanje'] - e['posle_konverzije'];
          this.transactionService.setTransactionStatus(e['idT'], 'Prihvaceno').subscribe(data => { console.log(data) });

          this.rateService.setMoney(element['valuta'], newToMoney).subscribe(data => { console.log(data) });
        }
      }
    });
    this.transactionService.fetchAllTransactionsService().subscribe((exchangeTransactions: ExchangeTransaction[]) => {
      this.exchangeTransactions = exchangeTransactions;
    })

  }

  returnName(username) {
    //console.log(this.exchangeTransactions);
    //console.log(this.customers['kor_ime']);
    return username;

  }

  logOut() {
    console.log(this.exchangeTransactions);
    console.log(this.customers);
    localStorage.clear();
    this.router.navigate(['']);
  }
}
