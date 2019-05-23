import { Component, OnInit } from '@angular/core';
import { book } from "./book";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-textbook-buy',
  templateUrl: './textbook-buy.component.html',
  styleUrls: ['./textbook-buy.component.css']
})
export class TextbookBuyComponent implements OnInit {
  books:book[] = [];
  error:String = "";
  submit:boolean = null;
  b:book;

    buyBooks = new FormGroup({
    courseSection: new FormControl(""),
    iSBN: new FormControl(""),
  });


  searchDB(){
    if(this.books.length == 0){
      this.submit = false;
      this.error = "Error with database, try again later. Populating books, search again :)";
      this.books.push(this.b = new book("csc321", 345532438, 334.53));
      this.books.push(this.b = new book("csc360", 123456789, 148.45));
      this.books.push(this.b = new book("csc241", 546234321, 24.63));
      this.books.push(this.b = new book("csc242", 956345263, 69.69));
      this.books.push(this.b = new book("csc371", 435726782, 444.11));
      this.books.push(this.b = new book("csc373", 454539067, 33.03));
      this.books.push(this.b = new book("csc376", 945432357, 23.83));
      this.books.push(this.b = new book("csc374", 312892138, 978.40));
      this.books.push(this.b = new book("it140", 638391648, 3.50));
    } else {
      this.submit = true;
    }
  }



  constructor() {}
  ngOnInit() {}
}
