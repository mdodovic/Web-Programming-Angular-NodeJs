import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillService } from '../bill.service';
import { Bill } from '../models/bill';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private billService: BillService, private userService: UserService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('logInUser'));
    this.type = this.activatedRoute.snapshot.paramMap.get('type');
    this.billService.fetchBillsByUserService(this.user.id).subscribe((myBills: Bill[]) => {
      this.totalDepth = 0;
      console.log(this.type)
      myBills.forEach(element => {
        if (element['tip'] == this.type) {
          console.log(element['tip'])
          if (!element['placen']) {
            this.myBills.push(element);
            this.totalDepth += element['iznos'];
          }
        }
      });
    })

  }


  user: User;
  type: string;
  myBills: Bill[] = [];
  totalDepth: number;
  errorMessage: string;

  payBills() {
    this.errorMessage = null;
    let selectedMoney = 0;
    this.myBills.forEach(element => {
      if (element['selected']) {
        selectedMoney += element['iznos'];
      }
    });

    console.log(selectedMoney)
    console.log(this.user.novac)
    if (this.user.novac < selectedMoney) {
      this.errorMessage = "Nemate dovoljno novca";
    } else {
      this.userService.payBills(this.user.id, this.user.novac - selectedMoney).subscribe((res) => {
        console.log(res);
        this.myBills.forEach(element => {
          if (element['selected']) {
            this.billService.payBill(element['id']).subscribe((res) => {
              console.log(res);
            });
          }
        });
      });
      this.router.navigate(['bill/' + this.type]);
    }
  }

  back() {
    this.router.navigate(['bill/' + this.type]);
  }
}
