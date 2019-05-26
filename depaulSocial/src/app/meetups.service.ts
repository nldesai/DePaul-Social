import { Injectable } from '@angular/core';
import { Meetup } from './meetup';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object

@Injectable({
  providedIn: 'root'
})
export class MeetupsService {

  constructor(private db: AngularFireDatabase) { }

  //meetups: Array<Meetup> = [];
  meetups: AngularFireList<any>;
  meetup: AngularFireObject<any>;

  addMeetup(meetup: Meetup) {
    this.meetups.push(meetup);
  }

  // Fetch Single Meetup Object
  getMeetup(id: string) {
    this.meetup = this.db.object('meetups-list/' + id);
    return this.meetup;
  }
  // Fetch Meetups List
  getMeetupsList() {
    this.meetups = this.db.list('meetups-list');
    return this.meetups;
  }
  // Update Meetup
  updateMeetup(meetup: Meetup) {
    this.meetup.update(meetup);
  }
  // Delete Meetup Object
  deleteMeetup(id: string) {
    this.meetup = this.db.object('meetups-list/' + id);
    this.meetup.remove();
  }
}
