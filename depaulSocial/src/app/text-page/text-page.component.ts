import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-text-page',
  templateUrl: './text-page.component.html',
  styleUrls: ['./text-page.component.css']
})
export class TextPageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
