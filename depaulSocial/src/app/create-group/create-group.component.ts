import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { StudyGroupService } from '../services/studygroup.service';


@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  public studyGroup: FormGroup;

  constructor(private studyGroupsService: StudyGroupService, public fb: FormBuilder) { }

  ngOnInit() {
    this.studyGroupsService.getStudyGroupsList();
    this.showForm();
  }

  showForm() {
    this.studyGroup = this.fb.group({
      name: [''],
      date: [''],
      time: [''],
      class: [''],
      location: ['']
    })
  }

  addStudyGroup() {
    this.studyGroupsService.addStudyGroup(this.studyGroup.value);
    this.resetForm();
  }

  resetForm() {
    this.studyGroup.reset();
  }

  get print() {
    return console.table(this.studyGroup.value);
  }
}
