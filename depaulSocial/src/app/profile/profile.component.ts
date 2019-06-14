import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {AngularFireAuth} from '@angular/fire/auth';

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

  constructor(private authService: AuthenticationService, private aService: AngularFireAuth) {
    this.defaultPic = 'assets/t2.jpg';
    this.classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4'];
  }

  ngOnInit(): void {
    // just to show the data on the UI, we don't need this I guess. Just to test it works.
    this.email = this.aService.auth.currentUser.email;
    this.userID = this.aService.auth.currentUser.uid;
  }

  // log out.
  logout() {
    this.authService.logout();
  }
}
