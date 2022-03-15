import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../models/users';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  username: string;
  password: string;
  worker: string;
  errorMessage: string;

  signUp() {
    this.errorMessage = null;
    let type;
    if (this.worker) {
      type = "radnik";
    } else {
      type = "kupac";
    }
    this.userService.signUpService(this.username, this.password, type).subscribe((user: Users) => {
      if (user) {
        console.log(user);
        localStorage.setItem('logInUser', JSON.stringify(user));
        if (user.tip == "radnik") {
          this.router.navigate(['worker']);
        } else {
          this.router.navigate(['']);
        }

      } else {
        this.errorMessage = "Greska";
      }
    })
  }

}
