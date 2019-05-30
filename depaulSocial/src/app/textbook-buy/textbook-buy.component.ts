import { Component, OnInit } from '@angular/core';
import { TextBooksService } from '../services/textbooks.service';
import { TextBook } from '../text-page/textbook';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-textbook-buy',
  templateUrl: './textbook-buy.component.html',
  styleUrls: ['./textbook-buy.component.css']
})
export class TextbookBuyComponent implements OnInit {

  textBooks: Array<TextBook>;
  submitted = false;
  filtered: Array<TextBook>;
  public textBook: FormGroup;

  constructor(private textBooksService: TextBooksService, public fb: FormBuilder) {}

  ngOnInit() {
    let s = this.textBooksService.getTextBooksList();
    s.snapshotChanges().subscribe(data => {
      this.textBooks = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.textBooks.push(a as TextBook);
      })
    });
    this.showForm();
  }

  showForm() {
    this.textBook = this.fb.group({
      class: [''],
      isbn: ['']
    })
  }

  resetForm() {
    this.textBook.reset();
    this.submitted = false;
  }

  get print() {
    return console.table(this.textBook.get('class').value, this.textBook.get('isbn').value);
  }

  search() {
    this.filtered = this.textBooks.filter(textBook => textBook.class === this.textBook.get('class').value && textBook.isbn === this.textBook.get('isbn').value);
    this.submitted = true;
  }
}
