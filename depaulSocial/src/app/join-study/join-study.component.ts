import { Component, OnInit } from '@angular/core';
import { StudyGroupService } from '../services/studygroup.service';

@Component({
  selector: 'app-join-study',
  templateUrl: './join-study.component.html',
  styleUrls: ['./join-study.component.css']
})
export class JoinStudyComponent implements OnInit {

  

  constructor(private studyGroupService: StudyGroupService) { }

  ngOnInit() {
  }

}
