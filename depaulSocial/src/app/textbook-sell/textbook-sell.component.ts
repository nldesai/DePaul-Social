import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TextBooksService } from '../services/textbooks.service';

@Component({
  selector: 'app-textbook-sell',
  templateUrl: './textbook-sell.component.html',
  styleUrls: ['./textbook-sell.component.css']
})
export class TextbookSellComponent implements OnInit {

  public textBook: FormGroup;

  constructor(private textBooksService: TextBooksService, public fb: FormBuilder) { }

  ngOnInit() {
    this.textBooksService.getTextBooksList();
    this.showForm();
  }

  showForm() {
    this.textBook = this.fb.group({
      title: [''],
      class: [''],
      isbn: [''],
      price: ['']
    })
  }

  addTextBook() {
    this.textBooksService.addTextBook(this.textBook.value);
    this.resetForm();
  }
  
  resetForm() {
    this.textBook.reset();
  }

  get print() {
    return console.table(this.textBook.value);
  }

}
