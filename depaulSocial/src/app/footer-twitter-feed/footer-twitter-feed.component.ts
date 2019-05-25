import { Component, OnInit } from '@angular/core';
import { TwitterService} from '../services/twitter.service';
import { TweeterUser} from '../models/tweeter-user';
import { Router} from '@angular/router';

@Component({
  selector: 'app-footer-twitter-feed',
  templateUrl: './footer-twitter-feed.component.html',
  styleUrls: ['./footer-twitter-feed.component.css']
})
export class FooterTwitterFeedComponent implements OnInit {

  tweets: Array<TweeterUser> = [];
  theTweet: TweeterUser = null;

  constructor(private twitterService: TwitterService, public router: Router){}


  ngOnInit() {
    // get the tweets from Twitter first.
    // hardcoded hashTag
    this.twitterService.getAllTweetsBasedOnHashTag('DePaulSocial')
      .subscribe((value: TweeterUser[]) => {
        this.tweets = value;
    });
    // display them.
    this.changeTweets();
  }

  /**
   * Changes the tweet from the array of users and tweets every 2 seconds.
   */
  changeTweets() {
    let index = 0;
    const timerId = setInterval(() => {
      if (index >= this.tweets.length) {
        index = 0;  // infinite loop
      } else {
        this.theTweet = this.tweets[index++];
        console.log(this.theTweet);
      }
    }, 2000);
  }
}
