import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
	defaultPic: string;
	names: string[];
  constructor() {
//defaultPic unused because pic is now assigned in the team card component
	this.defaultPic = 'assets/t2.jpg';
	this.names = ['Alex Reyes', 'Collin De Kalb', 'Heather Duke', 'Julio Lama', 'Linh Huynh', 'Neal Desai', 'Olajide Abatti', 'Tuan Nguyen'];
 }

  ngOnInit() {
  }

}
