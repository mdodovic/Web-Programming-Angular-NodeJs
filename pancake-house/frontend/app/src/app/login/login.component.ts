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

  constructor(private userService: UserService, private router: Router) { }

  username: string;
  password: string;
  type: string;
  errorMessage: string;

  ngOnInit(): void {
    localStorage.clear()
  }

  signIn() {
    //    console.log(this.username);
    //    console.log(this.password);
    //    console.log(this.type);
    this.userService.signInService(this.username, this.password, this.type).subscribe((user: User) => {
      console.log(user)
      if (user) {
        localStorage.setItem('logInUser', JSON.stringify(user));
        if (user.tip == 'radnik') {
          this.router.navigate(['worker']);
        }
        else {
          this.router.navigate(['customer']);
        }
      } else {
        this.errorMessage = 'Greska!';
      }
    })


  }

}
