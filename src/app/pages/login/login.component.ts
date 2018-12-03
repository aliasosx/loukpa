import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticateService, private router: Router, ) { }
  title: string = "Letter-p";
  userlogin: string;
  loggedIn: boolean = false;
  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl()
    });
    /* Load login */
    let token = localStorage.getItem('token');
    if (token) {
      this.authService.getTokenDecode({ 'token': token }).subscribe(result => {
        if (result['payload']) {
          this.router.navigateByUrl('');
        }
      });
    }
  }
  login() {
    const loginData = {
      'user': {
        'email': this.loginForm.get('email').value,
        'password': this.loginForm.get('password').value
      }
    }
    this.authService.getlogin(loginData).subscribe(result => {

      if (result['status'] === 'Success') {
        this.userlogin = result['token'];
        localStorage.setItem('token', this.userlogin);
        location.reload();
        this.router.navigateByUrl('/');
        //this.router.navigateByUrl('');
      } else {
        console.log('Error on login');
      }
    });
  }

}
