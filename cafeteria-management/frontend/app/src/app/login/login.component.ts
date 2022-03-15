import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    localStorage.clear()
  }

  username: string;
  password: string;
  type: string;

  errorMessage: string;

  signIn() {
    this.loginService.signInService(this.username, this.password, this.type).subscribe((user: User) => {
      if (user) {
        localStorage.setItem('logInUser', JSON.stringify(user));
        if (user.tip == 'admin') {
          this.router.navigate(['admin']);
        }
        else {
          this.router.navigate(['customer']);
        }
      } else {
        this.errorMessage = 'Greska!';
      }
    });
  }
}
