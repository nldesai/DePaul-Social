import { Component, OnInit } from '@angular/core';
import { TextBooksService } from '../services/textbooks.service';
import { TextBook } from '../text-page/textbook';

@Component({
  selector: 'app-textbook-buy',
  templateUrl: './textbook-buy.component.html',
  styleUrls: ['./textbook-buy.component.css']
})
export class TextbookBuyComponent implements OnInit {

  class: string;
  isbn: number;
  textBooks: Array<TextBook>;
  submitted = false;
  filtered: Array<TextBook>;

  constructor(private textBooksService: TextBooksService) {}

  ngOnInit() {
    let s = this.textBooksService.getTextBooksList();
    s.snapshotChanges().subscribe(data => {
      this.textBooks = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.textBooks.push(a as TextBook);
      })
    })
  }

  get print() {
    return console.table(this.class, this.isbn);
  }

  search() {
    this.filtered = this.textBooks.filter(textBook => textBook.class === this.class && textBook.isbn === this.isbn);
    this.submitted = true;
  }
}
