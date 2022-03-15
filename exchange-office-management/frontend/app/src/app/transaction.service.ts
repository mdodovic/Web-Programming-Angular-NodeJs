import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  uri = 'http://localhost:4000'


  constructor(private http: HttpClient) { }



  saveTransaction(idT, username, money, rateFrom, rateTo, afterConversion) {

    const data = {
      idT: idT,
      kupac: username,
      za_konverziju: money,
      trenutna_valuta: rateFrom,
      zeljena_valuta: rateTo,
      posle_konverzije: afterConversion,
      status: 'neobradjeno'
    }
    console.log(data);
    return this.http.post(`${this.uri}/transactions/saveTransaction`, data);



  }

  fetchAllTransactionsService() {
    return this.http.get(`${this.uri}/transactions/fetchAllTransactions`);
  }

  setTransactionStatus(idT, status) {
    const data = {
      idT: idT,
      status: status
    }
    console.log(data);
    return this.http.post(`${this.uri}/transactions/setTransactionStatus`, data);
  }

}
