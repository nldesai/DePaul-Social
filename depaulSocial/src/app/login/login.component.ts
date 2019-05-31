import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginGuard} from '../guards/login.guard';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;

  constructor(private service: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.loginFormGroup = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }


  login(){
    this.service.checkUserCredentials(this.loginFormGroup.get('email').value,
      this.loginFormGroup.get('password').value);
  }

}
