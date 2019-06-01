import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import UserCredential = firebase.auth.UserCredential;
import {User} from 'firebase';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;

  user: User;

  constructor(private service: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.loginFormGroup = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }


  login(email: string, password: string) {
    this.service.checkUserCredentials(email, password)
      .catch((reason) => {
        console.log('Could not get user. ' + reason);
      })
      .then((value: UserCredential) => {
        this.user = value.user;
        this.router.navigateByUrl('/home');
        this.service.setVerifiedUserStatus(true);
      });
  }
}
