import { Component, OnInit } from '@angular/core';
import { MeetupsService } from '../services/meetups.service';
import { MAJORS } from '../meetup/meetup-majors';
import { Meetup } from '../meetup/meetup';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-find-meetup',
  templateUrl: './find-meetup.component.html',
  styleUrls: ['./find-meetup.component.css']
})

export class FindMeetupComponent implements OnInit {

  majors = MAJORS;
  meetups: Array<Meetup>;
  submitted = false;
  filtered: Array<Meetup>;
  public meetup: FormGroup;

  constructor(private meetupsService: MeetupsService, public fb: FormBuilder) { }

  ngOnInit() {
    let s = this.meetupsService.getMeetupsList();
    s.snapshotChanges().subscribe(data => {
      this.meetups = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.meetups.push(a as Meetup);
      })
    });
    this.showForm();
  }

  showForm() {
    this.meetup = this.fb.group({
      major: [''],
      interests: [''],
      location: ['']
    })
  }

  resetForm() {
    this.meetup.reset();
    this.submitted = false;
  }

  get print() {
    return console.table(this.meetup.get('major').value, this.meetup.get('interests').value, this.meetup.get('location').value);
  }

  search() {
    if (this.meetup.get('interests').value) {
      this.filtered = this.meetups.filter(meetup => this.contains(meetup) && meetup.purpose === this.meetup.get('interests').value && meetup.location === this.meetup.get('location').value);
    } else {
      this.filtered = this.meetups.filter(meetup => this.contains(meetup) && meetup.location === this.meetup.get('location').value);
    }    
    this.submitted = true;
  }

  contains(meetup: Meetup) {
    let majors = meetup.majors;

    for (var i in majors) {
      if (majors[i] === this.meetup.get('major').value) {
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
