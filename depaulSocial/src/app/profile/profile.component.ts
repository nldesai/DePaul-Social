import { Component, OnInit } from '@angular/core';
import {UserDetailService} from '../services/user-detail.service';
import {AuthenticationService} from '../services/authentication.service';
import {LocalStorage} from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  defaultPic: string;
  classes: string[];

   email: string;
   userID: string;

  constructor(private userDetail: UserDetailService,
              private authService: AuthenticationService) {
    this.defaultPic = 'assets/t2.jpg';
    this.classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4'];
  }

  ngOnInit(): void {
    // just to show the data on the UI, we don't need this I guess. Just to test it works.
    this.email = this.userDetail.getUserEmail();
    this.userID = this.userDetail.getId();
  }

  // log out.
  logout() {
    this.authService.logout();
  }
}
