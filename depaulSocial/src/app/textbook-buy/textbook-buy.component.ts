import { Component, OnInit } from '@angular/core';
import { TextBooksService } from '../services/textbooks.service';
import { TextBook } from '../text-page/textbook';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-textbook-buy',
  templateUrl: './textbook-buy.component.html',
  styleUrls: ['./textbook-buy.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class TextbookBuyComponent implements OnInit {

  textBooks: Array<TextBook>;
  submitted = false;
  filtered: Array<TextBook>;
  public textBook: FormGroup;
  all = false;

  constructor(private textBooksService: TextBooksService, public fb: FormBuilder,
    config: NgbModalConfig, private modalService: NgbModal, private router: Router) {
      config.backdrop = 'static';
      config.keyboard = false;
    }

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

  findAll() {
    this.submitted = false;
    this.all = true;
  }

  buyBook(content, id: string) {
    this.modalService.open(content);
    this.textBooksService.deleteTextBook(id);
    this.router.navigateByUrl('/home');
  }

  resetForm() {
    this.textBook.reset();
    this.submitted = false;
    this.all = false;
  }

  get print() {
    return console.table(this.textBook.get('class').value, this.textBook.get('isbn').value);
  }

  search() {
    this.all = false;
    this.filtered = this.textBooks.filter(textBook => textBook.class === this.textBook.get('class').value
      && textBook.isbn === this.textBook.get('isbn').value);
    this.submitted = true;
  }
}
