import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(private http: HttpClient) { }

  getAllTweets() {
    return this.http.get('http://localhost:8080/depaulSocial/DUSTweets');
  }
}
