import { Component, OnInit } from '@angular/core';
import {TwitterService} from '../services/twitter.service';

@Component({
  selector: 'app-footer-twitter-feed',
  templateUrl: './footer-twitter-feed.component.html',
  styleUrls: ['./footer-twitter-feed.component.css']
})
export class FooterTwitterFeedComponent implements OnInit {

  constructor(private twitterService: TwitterService) { }

  ngOnInit() {
  }

}
