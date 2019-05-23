import { Component, OnInit } from '@angular/core';
import { MeetupsService } from '../meetups.service';
import { MAJORS } from '../meetup-majors';
import { Meetup } from '../meetup';

@Component({
  selector: 'app-create-meetup',
  templateUrl: './create-meetup.component.html',
  styleUrls: ['./create-meetup.component.css']
})
export class CreateMeetupComponent implements OnInit {

  majors = MAJORS;
  model = new Meetup();

  constructor(private meetupsService: MeetupsService) { }

  ngOnInit() {
  }

  addMeetup() {
    this.meetupsService.addMeetup(this.model);
  }

  get print() {
    return console.table(this.model);
  }
}
