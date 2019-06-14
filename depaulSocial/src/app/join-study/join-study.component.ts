import { Component, OnInit } from '@angular/core';
import { StudyGroupService } from '../services/studygroup.service';
import { StudyGroup } from '../study-page/studygroup';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-join-study',
  templateUrl: './join-study.component.html',
  styleUrls: ['./join-study.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class JoinStudyComponent implements OnInit {

  studyGroups: Array<StudyGroup>;
  submitted = false;
  filtered: Array<StudyGroup>;
  public studyGroup: FormGroup;
  all = false;

  constructor(private studyGroupService: StudyGroupService, public fb: FormBuilder,
    config: NgbModalConfig, private modalService: NgbModal, private router: Router) {

      config.backdrop = 'static';
      config.keyboard = false;
     }

  ngOnInit() {
    let s = this.studyGroupService.getStudyGroupsList();
    s.snapshotChanges().subscribe(data => {
      this.studyGroups = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.studyGroups.push(a as StudyGroup);
      })
    });
    this.showForm();
  }

  showForm() {
    this.studyGroup = this.fb.group({
      class: [''],
      topic: [''],
      location: ['']
    })
  }

  findAll() {
    this.submitted = false;
    this.all = true;
  }

  resetForm() {
    this.studyGroup.reset();
    this.submitted = false;
    this.all = false;
  }

  get print() {
    return console.table(this.studyGroup.get('class').value, this.studyGroup.get('topic').value, this.studyGroup.get('location').value);
  }

  join(content) {
    this.modalService.open(content);
    this.router.navigateByUrl('/home');
  }

  search() {
    this.all = false;
    
    if (this.studyGroup.get('topic').value) {
      this.filtered = this.studyGroups.filter(studyGroup => studyGroup.class === this.studyGroup.get('class').value
        && studyGroup.topic === this.studyGroup.get('topic').value && studyGroup.location === this.studyGroup.get('location').value);
    }
    else {
      this.filtered = this.studyGroups.filter(studyGroup => studyGroup.class === this.studyGroup.get('class').value
        && studyGroup.location === this.studyGroup.get('location').value);
    }
    this.submitted = true;
  }
}
