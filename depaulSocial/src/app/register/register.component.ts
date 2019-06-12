import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { UserService} from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      gender: new FormControl(''),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      birthdate: new FormControl(''),
      age: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      bio: new FormControl()
    });
  }

  /**
   * Creates a new user.
   */
  createUser() {
    this.userService.addUser(this.registerForm);
  }

}
