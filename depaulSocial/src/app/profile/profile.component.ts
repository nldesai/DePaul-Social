import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
  // , 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
})
export class ProfileComponent implements OnInit {
	defaultPic: string;
	classes: string[];
  constructor() {
	this.defaultPic = "assets/t2.jpg";
	this.classes = ['Class 1','Class 2','Class 3','Class 4']
}

  ngOnInit() {
  }

}
