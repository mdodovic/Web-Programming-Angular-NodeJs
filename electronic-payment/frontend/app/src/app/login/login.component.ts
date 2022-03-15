import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CityService } from '../city.service';
import { City } from '../models/city';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private cityService: CityService, private userService: UserService) { }

  ngOnInit(): void {
    this.cityService.fetchAllOrdersService().subscribe((cities: City[]) => {
      this.cities = cities;
    })
  }

  cities: City[];
  choosenCity: string;
  choosenAddress: string;
  flatNumber: number;
  pin: string;
  errorMessage: string;

  logIn() {
    console.log(this.choosenCity);
    console.log(this.choosenAddress);
    console.log(this.flatNumber);
    console.log(this.pin);
    this.errorMessage = null;
    if (this.pin == null) {
      this.errorMessage = "Morate uneti pin";
    } else {
      let regex = /^\d\d\d\d$/;
      if (!regex.test(this.pin)) {
        this.errorMessage = "Pin nije u dobrom formatu";
      } else {
        this.userService.signInService(this.choosenCity, this.choosenAddress, this.flatNumber, this.pin).subscribe((user: User) => {
          console.log(user)
          if (user) {
            localStorage.setItem('logInUser', JSON.stringify(user));
            this.router.navigate(['user']);
          } else {
            this.errorMessage = "Greska";
          }
        })
      }
    }
  }

}
