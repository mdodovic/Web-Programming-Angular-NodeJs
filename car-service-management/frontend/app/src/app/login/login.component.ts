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
  }

  username: string;
  password: string;
  isWorker: boolean;
  errorMessage: string;

  logIn() {
    let type: string;
    type = 'serviser'
    if (this.isWorker == true)
      type = 'radnik';
    console.log(this.username);
    console.log(this.password);
    console.log(type);

    this.userService.signInService(this.username, this.password, type).subscribe((user: User) => {
      console.log(user);
      if (user) {
        localStorage.setItem('logInUser', JSON.stringify(user));
        if (user.tip == 'radnik') {
          this.router.navigate(['worker']);
        } else {
          this.router.navigate(['servicer']);
        }
      } else {
        this.errorMessage = 'Greska!';
      }
    })

  }

}
