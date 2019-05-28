import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MeetupsService} from '../services/meetups.service';
import { MAJORS} from '../meetup/meetup-majors';

@Component({
  selector: 'app-create-meetup',
  templateUrl: './create-meetup.component.html',
  styleUrls: ['./create-meetup.component.css']
})
export class CreateMeetupComponent implements OnInit {

  majors = MAJORS;
  public meetup: FormGroup;

  constructor(private meetupsService: MeetupsService, public fb: FormBuilder) { }

  ngOnInit() {
    this.meetupsService.getMeetupsList();
    this.showForm();
  }

  showForm() {
    this.meetup = this.fb.group({
      name: [''],
      date: [''],
      time: [''],
      majors: [''],
      purpose: [''],
      location: ['']
    })
  }

  addMeetup() {
    this.meetupsService.addMeetup(this.meetup.value);
    this.resetForm();
  }
  
  resetForm() {
    this.meetup.reset();
  }

  get print() {
    return console.table(this.meetup.value);
  }
}
