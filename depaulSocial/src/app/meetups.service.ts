import { Injectable } from '@angular/core';
import { Meetup } from './meetup';

@Injectable({
  providedIn: 'root'
})
export class MeetupsService {

  constructor() { }

  x: Array<Meetup> = [];

  addMeetup(meetup: Meetup) {
    this.x.push(meetup);
  }

  get getLength() {
    return this.x.length;
  }

  filterWithoutInterests(major: string, location: string) {
    return this.x.filter(meetup => meetup.majors.includes(major) && meetup.location === location);
  }

  filterWithInterests(major: string, interests: string, location: string) {
    return this.x.filter(meetup => meetup.majors.includes(major) && meetup.purpose === interests && meetup.location === location);
  }

}
