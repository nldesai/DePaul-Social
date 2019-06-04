import { Component, OnInit } from '@angular/core';
import {TweeterUser} from '../models/tweeter-user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

  // array holding twitter users.
  twitterUsers: TweeterUser[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  // on start add all the users to the array.
  ngOnInit() {
    this.activatedRoute.data.subscribe( (data: {Tweets: TweeterUser[] }) => {
      this.twitterUsers = data.Tweets;
    });
  }

}
