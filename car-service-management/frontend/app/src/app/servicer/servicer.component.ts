import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from '../models/orders';
import { Parts } from '../models/parts';
import { User } from '../models/user';
import { OrdersService } from '../orders.service';
import { PartsService } from '../parts.service';

@Component({
  selector: 'app-servicer',
  templateUrl: './servicer.component.html',
  styleUrls: ['./servicer.component.css']
})
export class ServicerComponent implements OnInit {

  constructor(private router: Router, private partsService: PartsService, private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('logInUser'));
    this.partsService.fetchAllPartsService().subscribe((parts: Parts[]) => {
      this.parts = parts;
    })
    this.ordersService.fetchAllOrdersService().subscribe((orders: Orders[]) => {
      this.orders = orders;
      this.partsService.fetchAllPartsService().subscribe((parts: Parts[]) => {
        parts.forEach(element => {
          for (let i = 0; i < this.orders.length; i++) {
            if (element.naziv == this.orders[i].deo) {
              this.orders[i].amountOfParts = element.stanje;

            }
          }
        });
      })
      for (let i = 0; i < this.orders.length; i++) {
        this.orders[i].nextStatus = this.orders[i].status;
      }
    })
  }
  choosenStatus: string;
  user: User
  parts: Parts[]
  orders: Orders[]
  newPartName: string;
  additionalPart: string;
  orderName: string;
  errorMessage: string;

  changeStatus(orderId, previousStatus, value) {
    console.log(orderId);
    console.log(value);
    console.log(previousStatus);
    if (!(previousStatus == "u obradi" && value == "novi")) {
      console.log("OK");
      this.ordersService.changeStatus(orderId, value).subscribe((res) => { console.log(res) });
    }

    this.ordersService.fetchAllOrdersService().subscribe((orders: Orders[]) => {
      this.orders = orders;
      this.partsService.fetchAllPartsService().subscribe((parts: Parts[]) => {
        parts.forEach(element => {
          for (let i = 0; i < this.orders.length; i++) {
            if (element.naziv == this.orders[i].deo) {
              this.orders[i].amountOfParts = element.stanje;

            }
          }
        });
      })
      for (let i = 0; i < this.orders.length; i++) {
        this.orders[i].nextStatus = this.orders[i].status;
      }
    })

  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }


  saveOrder() {
    let partName = null;
    this.errorMessage = null;
    if (this.newPartName) {
      if (this.additionalPart != '') {
        this.errorMessage = "Mora tacno 1 opcija biti izabrana (ako je tekst unet, ne moze se izabrati postojeci deo)"
      }
      else {
        partName = this.newPartName;
        this.partsService.addNewPart(partName, 0).subscribe(res => console.log(res));
      }
    } else {
      if (!this.additionalPart || this.additionalPart == '') {
        this.errorMessage = "Mora tacno 1 opcija biti izabrana (ako je opcija Novi deo izabrana, naziv se mora izabrati)"
      } else {
        partName = this.additionalPart
      }
    }
    if (!this.errorMessage) {
      this.ordersService.fetchAllOrdersService().subscribe((orders: Orders[]) => {
        let id = 0;
        orders.forEach(element => {
          if (id < element.id) {
            id = element.id;
          }
        });
        id += 1;
        console.log(id);
        console.log(this.user.kor_ime);
        console.log(this.orderName);
        console.log(partName);
        this.ordersService.addOrder(id, this.user.kor_ime, this.orderName, partName, 'novi').subscribe(res => console.log(res));
      })
    }
    this.partsService.fetchAllPartsService().subscribe((parts: Parts[]) => {
      this.parts = parts;
    })
    this.ordersService.fetchAllOrdersService().subscribe((orders: Orders[]) => {
      this.orders = orders;
      this.partsService.fetchAllPartsService().subscribe((parts: Parts[]) => {
        parts.forEach(element => {
          for (let i = 0; i < this.orders.length; i++) {
            if (element.naziv == this.orders[i].deo) {
              this.orders[i].amountOfParts = element.stanje;

            }
          }
        });
      })
      for (let i = 0; i < this.orders.length; i++) {
        this.orders[i].nextStatus = this.orders[i].status;
      }
    })

  }
}
