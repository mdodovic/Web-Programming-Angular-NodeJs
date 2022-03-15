import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  username: string;
  password: string;
  errorMessage: string;

  logIn() {
    console.log(this.username);
    console.log(this.password);
    this.userService.logInService(this.username, this.password).subscribe((user: User) => {
      if (user) {
        localStorage.setItem('loggedInCustomer', JSON.stringify(user));
        if (user.tip == "S") {
          this.router.navigate(['user'])
        } else {
          this.router.navigate(['admin'])
        }
      } else {
        this.errorMessage = 'Greska!';
      }
    });
  }

}
