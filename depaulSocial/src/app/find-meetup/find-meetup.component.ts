import { Component, OnInit } from '@angular/core';
import { MeetupsService } from '../services/meetups.service';
import { MAJORS } from '../meetup/meetup-majors';
import { Meetup } from '../meetup/meetup';

@Component({
  selector: 'app-find-meetup',
  templateUrl: './find-meetup.component.html',
  styleUrls: ['./find-meetup.component.css']
})

export class FindMeetupComponent implements OnInit {

  majors = MAJORS;
  interests: string;
  location: string;
  major: string;
  meetups: Array<Meetup>;
  submitted = false;
  filtered: Array<Meetup>;

  constructor(private meetupsService: MeetupsService) { }

  ngOnInit() {
    let s = this.meetupsService.getMeetupsList();
    s.snapshotChanges().subscribe(data => {
      this.meetups = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.meetups.push(a as Meetup);
      })
    })
  }

  get print() {
    return console.table(this.major, this.interests, this.location);
  }

  search() {
    if (this.interests) {
      this.filtered = this.meetups.filter(meetup => this.contains(meetup) && meetup.purpose === this.interests && meetup.location === this.location);
    } else {
      this.filtered = this.meetups.filter(meetup => this.contains(meetup) && meetup.location === this.location);
    }
    this.submitted = true;
  }

  contains(meetup: Meetup) {
    let majors = meetup.majors;

    for (var i in majors) {
      if (majors[i] === this.major) {
        return true;
      }
    }
    return false;
  }

  printArray(meetup: Meetup) {
    let majors = meetup.majors;
    let result = '';
    let length = 0;
    let ct = 0;

    for (let i in majors) {
      length++;
    }

    if (length === 0) {
      return result;
    }

    for (let i in majors) {
      if (length === 1) {
        return majors[i];
      }
      else if (ct === length - 1) {
        result += majors[i];
      }
      else {
        result += majors[i] + ', ';
        ct++;
      }
    }

    return result;
  }
}
