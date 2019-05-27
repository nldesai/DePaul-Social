import { Component, OnInit } from '@angular/core';
import {TwitterService} from '../services/twitter.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  groupMembers: Array <string> = [
    'Alexanderson Reyes',
    'Collin De Kalb',
    'Heather Duke',
    'Julio Lama',
    'Linh Huynh',
    'Neal Desai',
    'Olajide Abatti',
    'Tuan Nguyen'
  ];

  constructor(private twitter: TwitterService) { }


  ngOnInit() {}

}
