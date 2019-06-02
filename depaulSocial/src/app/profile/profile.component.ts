import { Component, OnInit } from '@angular/core';
import {UserDetailService} from '../services/user-detail.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  defaultPic: string;
  classes: string[];

  private email: string;

  constructor(private userDetailService: UserDetailService) {
    this.defaultPic = 'assets/t2.jpg';
    this.classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4'];
  }

  ngOnInit(): void {
    this.email = this.userDetailService.getUserEmail();
  }
}
