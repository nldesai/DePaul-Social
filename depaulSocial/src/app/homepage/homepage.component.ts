import { Component, OnInit } from '@angular/core';
import {UserDetailService} from '../services/user-detail.service';
import {LocalStorage} from '@ngx-pwa/local-storage';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private userDetail: UserDetailService, private localStorage: LocalStorage, private authService:
  AuthenticationService) { }

  ngOnInit() {
    // save user to local storage.
    this.authService.getCurrentSignInUser();
    // put the values into user detail service.
    this.localStorage.getItem('email').subscribe( (value) => {
      this.userDetail.setEmail(value);
    });

    this.localStorage.getItem('userID').subscribe( (value) => {
      this.userDetail.setUserID(value);
    });
  }
}
