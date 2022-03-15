import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExchangeRate } from '../models/ExchangeRates';
import { ExchangeTransaction } from '../models/ExchangeTransaction';
import { RatesService } from '../rates.service';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private rateService: RatesService, private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.rateService.fetchAllExchangeRatesService().subscribe((rates: ExchangeRate[]) => {
      this.rates = rates;
    })
    this.username = this.activatedRoute.snapshot.paramMap.get('username');
  }
  username: string;
  rates: ExchangeRate[];
  transactionMessage: string;

  money: string;
  rateFrom: string;
  rateTo: string;

  finishTransaction() {
    this.transactionMessage = null;
    console.log(this.username);
    if (this.rateFrom == this.rateTo) {
      this.transactionMessage = "Konvertovanje 2 iste valute (" + this.rateFrom + "->" + this.rateTo + ") nije dozvoljeno!";
    } else {
      console.log(this.rateFrom);
      let oneMoneyFrom = 0;
      console.log(this.rateTo);
      let oneMoneyTo = 0;
      this.rates.forEach(element => {
        if (element['valuta'] == this.rateFrom) {
          oneMoneyFrom = element['sr_kurs']
        }
        if (element['valuta'] == this.rateTo) {
          oneMoneyTo = element['sr_kurs']
        }
      });
      console.log(Number.parseFloat(this.money))
      console.log(oneMoneyFrom);
      console.log(oneMoneyTo);
      let afterConversion = Number.parseFloat(this.money) * oneMoneyFrom / oneMoneyTo;
      console.log(afterConversion)
      this.transactionService.fetchAllTransactionsService().subscribe((ex: ExchangeTransaction[]) => {
        this.transactionService.saveTransaction(ex.length + 1, this.username, Number.parseFloat(this.money), this.rateFrom, this.rateTo, afterConversion).subscribe(data => {
          if (data['message'] == 'ok') {
            this.transactionMessage = "Vasa konverzija " + Number.parseFloat(this.money) + " " + this.rateFrom +
              " u " + afterConversion + " " + this.rateTo + " JE U TOKU";
          } else {
            this.transactionMessage = "Greska pri belezenju transakcije!";
          }
          console.log(this.transactionMessage);
          localStorage.setItem('transactionMessage', this.transactionMessage);
          this.router.navigate(['customer']);

        });
      })
    }

  }

}
