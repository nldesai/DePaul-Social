import { Injectable } from '@angular/core';
import { HttpClient,HttpParams} from '@angular/common/http';
import { TweeterUser} from '../models/tweeter-user';

@Injectable({
  providedIn: 'root'
})

export class TwitterService {

  constructor(private http: HttpClient) { }

  /**
   * @return DePaul's social timeline.
   */
  getAllTweets() {
    return this.http.get('http://localhost:8080/depaulSocial/DUSTweets');
  }

  /**
   * Builds a url like: /depaulSocial/useHashTag?hashTag=someHashTag
   * @param hashTag to look for.
   */
  getAllTweetsBasedOnHashTag(hashTag) {
    let parameters = new HttpParams();
    parameters = parameters.append('hashTag', hashTag);
    return this.http.get<TweeterUser[]>('http://localhost:8080/depaulSocial/useHashTag', {params: parameters});
  }
}
