import { Component, OnInit } from '@angular/core';
import { StudyGroupService } from '../services/studygroup.service';
import { StudyGroup } from '../study-page/studygroup';

@Component({
  selector: 'app-join-study',
  templateUrl: './join-study.component.html',
  styleUrls: ['./join-study.component.css']
})
export class JoinStudyComponent implements OnInit {

  class: string;
  topic: string;
  location: string;
  studyGroups: Array<StudyGroup>;
  submitted = false;
  filtered: Array<StudyGroup>;

  constructor(private studyGroupService: StudyGroupService) { }

  ngOnInit() {
    let s = this.studyGroupService.getStudyGroupsList();
    s.snapshotChanges().subscribe(data => {
      this.studyGroups = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.studyGroups.push(a as StudyGroup);
      })
    })
  }

  get print() {
    return console.table(this.class, this.topic, this.location);
  }

  search() {
    if (this.topic) {
      this.filtered = this.studyGroups.filter(studyGroup => studyGroup.class === this.class && studyGroup.topic === this.topic && studyGroup.location === this.location);
    }
    else {
      this.filtered = this.studyGroups.filter(studyGroup => studyGroup.class === this.class && studyGroup.location === this.location);
    }
    this.submitted = true;
  }
}
