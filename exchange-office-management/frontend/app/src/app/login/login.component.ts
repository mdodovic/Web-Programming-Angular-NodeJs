import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  username: string;
  password: string;
  type: string;

  errorMessage: string;

  logIn() {
    console.log(this.username);
    console.log(this.password);
    console.log(this.type);
    this.userService.logInService(this.username, this.password, this.type).subscribe((user: User) => {
      console.log(user)
      if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        if (user.tip == "radnik") {
          this.router.navigate(['worker']);
        } else {
          this.router.navigate(['customer']);
        }
      } else {
        this.errorMessage = "Greska!";
      }
    })

  }

}
