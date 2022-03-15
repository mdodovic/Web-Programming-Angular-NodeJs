import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoffeeService } from '../coffee.service';
import { Coffee } from '../model/coffee';
import { User } from '../model/User';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private router: Router, private coffeeService: CoffeeService) { }

  ngOnInit(): void {
    this.customer = JSON.parse(localStorage.getItem('logInUser'));
    this.coffeeService.findCoffeeByNameService("").subscribe((data: Coffee[]) => {
      this.coffees = data;
    })
  }

  customer: User;

  logOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  showBasket() {
    this.router.navigate(['basket']);
  }

  namePattern: String;
  coffees: Coffee[];
  findCoffeesByName() {
    this.coffeeService.findCoffeeByNameService(this.namePattern).subscribe((data: Coffee[]) => {
      this.coffees = data;
    })
  }

}
