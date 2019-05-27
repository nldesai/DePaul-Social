import { Component, OnInit } from '@angular/core';
import { MeetupsService} from "../services/meetups.service";
import { MAJORS} from "../meetup/meetup-majors";
import { Meetup} from "../meetup/meetup";

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
  filtered: Array<Meetup>;
  submitted = false;

  constructor(private meetupsService: MeetupsService) { }

  ngOnInit() {
  }

  get print() {
    return console.table(this.major, this.interests, this.location);
  }

  search() {
    if (this.interests) {
      this.filtered = this.meetupsService.filterWithInterests(this.major, this.interests, this.location);
    } else {
      this.filtered = this.meetupsService.filterWithoutInterests(this.major, this.location);
    }
    this.submitted = true;
  }

}
