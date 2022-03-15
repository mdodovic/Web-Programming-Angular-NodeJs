import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillService } from '../bill.service';
import { Bill } from '../models/bill';
import { User } from '../models/user';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private billService: BillService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('logInUser'));
    this.type = this.activatedRoute.snapshot.paramMap.get('type');
    this.billService.fetchBillsByUserService(this.user.id).subscribe((myBills: Bill[]) => {
      this.totalDepth = 0;
      let min = Number.MAX_SAFE_INTEGER;
      let max = 0;

      console.log(this.type)
      myBills.forEach(element => {
        if (element['tip'] == this.type) {
          console.log(element['tip'])

          this.myBills.push(element);
          if (!element['placen']) {
            this.totalDepth += element['iznos'];
          }
          if (element['iznos'] > max) {
            max = element['iznos'];
            this.maxInd = element['id'];
          }
          if (element['iznos'] < min) {
            min = element['iznos'];
            this.minInd = element['id'];
          }
        }
      });
      console.log(this.minInd)
      console.log(this.maxInd)
      console.log(min)
      console.log(max)
      if (min == max) {
        this.minInd = -1;
        this.maxInd = -1;
      }

    })


  }
  user: User;
  type: string;
  myBills: Bill[] = [];
  totalDepth: number;
  minInd: number;
  maxInd: number;
  back() {
    this.router.navigate(['user']);
  }

  payBills() {
    this.router.navigate(['payBills/' + this.type]);
  }
}
