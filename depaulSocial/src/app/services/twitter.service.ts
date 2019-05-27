import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { TweeterUser} from '../models/tweeter-user';

@Injectable({
  providedIn: 'root'
})

export class TwitterService {

  constructor(private http: HttpClient) { }


  /**
   * @return DePaul's social timeline.
   */
  getDePaulSocialTimeline() {
    return this.http.get('https://depaulsocial.herokuapp.com/DUTwitter/DUSTimeline');
  }

  /**
   * @returns DePaul's social tweets.
   */
  getDePaulSocialTweets() {
    return this.http.get('https://depaulsocial.herokuapp.com/DUTwitter/DUSTweets');
  }

  /**
   * @returns tweets with that hashTag
   * @param hashTag to look for.
   */
  getAllTweetsBasedOnHashTag(hashTag) {
    let parameters = new HttpParams();
    parameters = parameters.append('hashTag', hashTag);
    return this.http.get<TweeterUser[]>('https://depaulsocial.herokuapp.com/DUTwitter/withHashTag', {params: parameters});
  }
}
