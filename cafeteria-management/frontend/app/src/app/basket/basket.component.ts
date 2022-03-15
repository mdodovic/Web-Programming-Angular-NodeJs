import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoffeeService } from '../coffee.service';
import { Item } from '../model/item';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private router: Router, private coffeeService: CoffeeService) { }

  ngOnInit(): void {
    this.itemsInBasket = JSON.parse(localStorage.getItem('basket'));
    this.totalMoney = 0;
    for (let i = 0; i < this.itemsInBasket.length; i++) {
      this.totalMoney += this.itemsInBasket[i].cena;
    }

  }

  itemsInBasket: Item[];
  totalMoney: number;

  orderAllCoffees() {
    let customer = JSON.parse(localStorage.getItem('logInUser'));
    this.coffeeService.addOrderService(customer.korime, JSON.parse(localStorage.getItem('basket'))).subscribe(res => {
      console.log(res);
    });
    //localStorage.setItem('basket', null);
    localStorage.clear();
    localStorage.setItem('logInUser', JSON.stringify(customer));
    this.router.navigate(['customer']);
  }
}
