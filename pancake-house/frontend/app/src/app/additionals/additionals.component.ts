import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Additionals } from '../models/additionals';
import { Order } from '../models/order';
import { User } from '../models/user';
import { OrderService } from '../order.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-additionals',
  templateUrl: './additionals.component.html',
  styleUrls: ['./additionals.component.css']
})
export class AdditionalsComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private productsService: ProductsService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.mainProductName = this.activatedRoute.snapshot.paramMap.get('choosenProduct');
    this.user = JSON.parse(localStorage.getItem('logInUser'));
    this.productsService.fetchAllAdditionalsService().subscribe((additionals: Additionals[]) => {
      this.additionals = additionals;
    })
  }

  mainProductName: string;
  additionals: Additionals[];
  user: User
  choosenAdditionals: string[];
  errorMessage: string;

  finishOrder() {
    this.errorMessage = null;
    let today = new Date();
    if (this.choosenAdditionals == null) {
      this.errorMessage = "Morate izabrati bar 1 dodatak";
    } else {
      console.log(this.choosenAdditionals);
      this.orderService.fetchAllOrdersService().subscribe((orders: Order[]) => {
        console.log(orders.length)
        this.orderService.finishOrderService(orders.length + 1, this.mainProductName, this.user.kor_ime, this.choosenAdditionals, today).subscribe(res => { console.log(res) });
        const data = {
          'message': 'ok'
        }
        localStorage.setItem('customerToken', JSON.stringify(data));
        this.router.navigate(['customer']);
      })
    }
  }

}
