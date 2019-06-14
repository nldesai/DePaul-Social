import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object
import { TextBook } from '../text-page/textbook';
import {AngularFireAuth} from '@angular/fire/auth';
import { text } from '@angular/core/src/render3';


@Injectable({
  providedIn: 'root'
})
export class TextBooksService {

  textBooks: AngularFireList<any>;
  textBook: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase, private authService: AngularFireAuth) { }

  addTextBook(textBook: TextBook) {
    textBook.contact = this.authService.auth.currentUser.email;
    textBook.userid = this.authService.auth.currentUser.uid;
    this.textBooks.push(textBook);
  }

  // Fetch Single TextBook Object
  getTextBook(id: string) {
    this.textBook = this.db.object('textbooks-list/' + id);
    return this.textBook;
  }
  // Fetch TextBooks List
  getTextBooksList() {
    this.textBooks = this.db.list('textbooks-list');
    return this.textBooks;
  }
  // Update TextBook
  updateTextBook(textBook: TextBook) {
    this.textBook.update(textBook);
  }
  // Delete TextBook Object
  deleteTextBook(id: string) {
    this.textBook = this.db.object('textbooks-list/' + id);
    this.textBook.remove();
  }
}
