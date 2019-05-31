import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      gender: new FormControl(''),
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      birthdate: new FormControl(''),
      age: new FormControl(''),
      email: new FormControl('', [Validators.required])
    });
  }

  /**
   * Creates a new user.
   */
  createUser() {
    this.authenticationService.createUser(this.registerForm);
  }

}
