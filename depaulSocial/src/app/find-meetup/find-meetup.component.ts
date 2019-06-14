import { Component, OnInit } from '@angular/core';
import { MeetupsService } from '../services/meetups.service';
import { MAJORS } from '../meetup/meetup-majors';
import { Meetup } from '../meetup/meetup';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-find-meetup',
  templateUrl: './find-meetup.component.html',
  styleUrls: ['./find-meetup.component.css'],
  providers: [NgbModalConfig, NgbModal]
})

export class FindMeetupComponent implements OnInit {

  majors = MAJORS;
  meetups: Array<Meetup>;
  submitted = false;
  filtered: Array<Meetup>;
  public meetup: FormGroup;
  all = false;

  constructor(private meetupsService: MeetupsService, public fb: FormBuilder,
    config: NgbModalConfig, private modalService: NgbModal, private router: Router) {

      config.backdrop = 'static';
      config.keyboard = false;
     }

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

  findAll() {
    this.submitted = false;
    this.all = true;
  }

  resetForm() {
    this.meetup.reset();
    this.submitted = false;
    this.all = false;
  }

  get print() {
    return console.table(this.meetup.get('major').value, this.meetup.get('interests').value, this.meetup.get('location').value);
  }

  join(content) {
    this.modalService.open(content);
    this.router.navigateByUrl('/home');
  }

  search() {

    this.all = false;

    if (this.meetup.get('interests').value) {
      this.filtered = this.meetups.filter(meetup => this.contains(meetup) &&
        meetup.purpose === this.meetup.get('interests').value && meetup.location === this.meetup.get('location').value);

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
