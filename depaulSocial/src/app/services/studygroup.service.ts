import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object
import { StudyGroup } from '../study-page/studygroup';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class StudyGroupService {

  constructor(private db: AngularFireDatabase, private authService: AngularFireAuth) { }

  studyGroups: AngularFireList<any>;
  studyGroup: AngularFireObject<any>;

  addStudyGroup(studyGroup: StudyGroup) {
    studyGroup.creator = this.authService.auth.currentUser.uid;
    studyGroup.contact = this.authService.auth.currentUser.email;
    this.studyGroups.push(studyGroup);
  }

  // Fetch Single StudyGroup Object
  getStudyGroup(id: string) {
    this.studyGroup = this.db.object('studygroups-list/' + id);
    return this.studyGroup;
  }
  // Fetch StudyGroups List
  getStudyGroupsList() {
    this.studyGroups = this.db.list('studygroups-list');
    return this.studyGroups;
  }
  // Update StudyGroup
  updateMeetup(studyGroup: StudyGroup) {
    this.studyGroup.update(studyGroup);
  }
  // Delete StudyGroup Object
  deleteMeetup(id: string) {
    this.studyGroup = this.db.object('meetups-list/' + id);
    this.studyGroup.remove();
  }
}
