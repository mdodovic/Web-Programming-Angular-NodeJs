import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillService } from '../bill.service';
import { Bill } from '../models/bill';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router, private billService: BillService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('logInUser'));
    this.billService.fetchBillsByUserService(this.user.id).subscribe((myBills: Bill[]) => {
      this.myBills = myBills;
      myBills.forEach(element => {
        //        let m = 
        if (element['mesec'].split("-")[0] == "2021" && element['mesec'].split("-")[1] == "02") {
          if (element['tip'] == "mobilni") {
            this.mobilni = element['iznos'];
          } else if (element['tip'] == "infostan") {
            this.infostan = element['iznos'];
          } else if (element['tip'] == "kablovska") {
            this.kablovska = element['iznos'];
          } else {
            this.struja = element['iznos'];
          }
        }

      });
    })
  }

  user: User
  myBills: Bill[]
  struja: number;
  infostan: number;
  kablovska: number;
  mobilni: number;



  logOut() {
    localStorage.clear()
    this.router.navigate(['']);
  }
}
