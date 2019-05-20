import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-study-page',
  templateUrl: './study-page.component.html',
  styleUrls: ['./study-page.component.css']
})
export class StudyPageComponent implements OnInit {

  // dependency injection to use Router.
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
