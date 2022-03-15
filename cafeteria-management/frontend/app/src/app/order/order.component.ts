import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoffeeService } from '../coffee.service';
import { Additions } from '../model/additions';
import { Coffee } from '../model/coffee';
import { Item } from '../model/item';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private coffeeService: CoffeeService, private router: Router) { }

  coffee: Coffee;
  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.coffeeService.findCoffeeByIdService(parseInt(id)).subscribe((coffee: Coffee) => {
      this.coffee = coffee;
    });
    this.coffeeService.fetchAdditionsService().subscribe((data: Additions[]) => {
      this.additions = data;
    });
  }

  size: string;
  additions: Additions[];


  back() {
    this.router.navigate(['customer'])
  }

  addAdditions() {
    let item = new Item();
    item.kafa = this.coffee.id;
    console.log(this.size);
    item.velicina = this.size.split('-')[0];
    item.cena = parseInt(this.size.split('-')[1]);
    item.dodaci = []
    for (let i = 0; i < this.additions.length; i++) {
      if (this.additions[i].checked == true) {
        item.cena += this.additions[i].cena;
        item.dodaci.push(this.additions[i].id)
      }
    }
    let basket: Item[] = [];
    if (localStorage.getItem('basket') != null) {
      basket = JSON.parse(localStorage.getItem('basket'));
    }
    basket.push(item);
    localStorage.setItem('basket', JSON.stringify(basket));
    this.router.navigate(['customer'])
  }

}
