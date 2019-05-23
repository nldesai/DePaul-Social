import { Injectable } from '@angular/core';
import { Meetup } from './meetup';

@Injectable({
  providedIn: 'root'
})
export class MeetupsService {

  constructor() { }

  meetups: Array<Meetup> = [];

  addMeetup(meetup: Meetup) {
    this.meetups.push(meetup);
  }

  filterWithoutInterests(major: string, location: string) {
    return this.meetups.filter(meetup => meetup.majors.includes(major) && meetup.location === location);
  }

  filterWithInterests(major: string, interests: string, location: string) {
    return this.meetups.filter(meetup => meetup.majors.includes(major) && meetup.purpose === interests && meetup.location === location);
  }

}
