import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { Router} from '@angular/router';
import { User} from '../models/user';
import { FormGroup} from '@angular/forms';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import UserCredential = firebase.auth.UserCredential;
import {UserInfo} from 'firebase';
import {book} from '../textbook-buy/book';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  userList: Observable <User[]>;

  currentUser: UserCredential;

  verifiedUser: boolean;

  // Users collection.
  private userCollection: AngularFirestoreCollection<User>;

  constructor(private authService: AngularFireAuth,
              private database: AngularFirestore,
              private router: Router) {
   this.userCollection = database.collection<User>('users');
   this.userList = this.userCollection.valueChanges();
  }


  /**
   * Calls the db to save the info from the group form.
   * @param registrationForm containing the User's information.
   */
  createUser(registrationForm: FormGroup) {
    const newUser: User = {
      firstName: registrationForm.get('firstName').value,
      lastName: registrationForm.get('lastName').value,
      gender: registrationForm.get('gender').value,
      userName: registrationForm.get('userName').value,
      password: registrationForm.get('password').value,
      birthdate: registrationForm.get('birthdate').value,
      age: registrationForm.get('age').value,
      email: registrationForm.get('email').value.toString().trim()
    };

    // 1) add the user to Authentication Firebase.
    this.authService.auth.createUserWithEmailAndPassword(newUser.email, newUser.password)
      .catch((onFailure) => {
        console.log('Failed registering new user for Firebase authentication. Reason: ' + onFailure);
      })
      .then((onSuccess: UserCredential) => {
        console.log('Success registering new user for Firebase authentication. User:'
          + onSuccess.additionalUserInfo.username);

        this.authService.authState.subscribe((currentUser) => {
          currentUser.sendEmailVerification();
        });
      })
      // 2) add the user to the DePaulSocial database.
      .finally(() => {
        this.userCollection.add(newUser)
          .catch((onFailure) => {
            console.log('Failed adding new user to the DePaulSocial database. Reason: ' + onFailure);
          })
          .then((onSuccess) => {
            console.log('Success adding new user to the DePaulSocial database.');
          })
          .finally(() => {
            this.router.navigateByUrl('login');
          });
      });
  }

  /**
   * Function for the login component.
   */
  checkUserCredentials(email: string, password: string) {
    this.authService.auth.signInWithEmailAndPassword(email, password)
      .catch((onFailure) => {
        console.log('Failed credentials.' + onFailure);
        this.setStatus(false);
      })
      .then((onSuccess: UserCredential) => {
        console.log('Hello! ' + onSuccess);
        this.setStatus(true);
        this.currentUser = onSuccess;
      });
  }


  setStatus(status: boolean) {
    this.verifiedUser = status;
  }
  isLoggedIn(): boolean {
    return this.getCurrentUser() != null;
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
