import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {User} from 'firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  defaultPic: string;
  classes: string[];

  user: User;

  constructor(private authService: AuthenticationService) {
    this.defaultPic = 'assets/t2.jpg';
    this.classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4'];
}

  ngOnInit() {
    this.user = this.authService.getCurrentSignInUser();
  }

}
