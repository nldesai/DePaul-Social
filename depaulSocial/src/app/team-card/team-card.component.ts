import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {
	@Input() name: string;
	@Input() pic: string;
  constructor() { 
//want to pass in pic path, but not working currently
	this.pic = 'assets/t2.jpg';
}
  ngOnInit() {
  }

}
