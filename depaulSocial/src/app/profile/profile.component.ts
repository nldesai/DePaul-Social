import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
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
