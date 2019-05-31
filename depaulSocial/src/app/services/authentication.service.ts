import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { Router} from '@angular/router';
import { User} from '../models/user';
import { FormGroup} from '@angular/forms';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import UserCredential = firebase.auth.UserCredential;
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  userList: Observable <User[]>;

  currentUser: UserCredential;

  isUserVerified: boolean;

  // Users collection from Firebase.
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
      // 2) add the user to DePaulSocial db.
      .then((value => {
        this.userCollection.add(newUser);
      }))
      .finally(() => {
        this.router.navigateByUrl('login');
      });
  }

  /**
   * Function for the login component.
   * @returns the current user trying to log in.
   */
  checkUserCredentials(email: string, password: string): Promise <UserCredential> {
    return this.authService.auth.signInWithEmailAndPassword(email, password)
      .catch((onFailure) => {
        console.log('Failed credentials.' + onFailure);
      })
      .then((currentUser: UserCredential) => {
        this.authService.auth.setPersistence(firebase.auth.Auth.Persistence.SESSION); // persist the user session until it logs out.
        console.log('Hello! ' + currentUser.user.email);
        this.currentUser = currentUser;
        return currentUser;
      });
  }

  /**
   * @param status
   * If the function checkUserCredentials() returns an object of UserCredential, then
   * this function will be called from the login.component.ts to set the status to true,
   * so that the login.guard.ts lets the user log in.
   *
   */
  setVerifiedUserStatus(status: boolean) {
    this.isUserVerified = status;
  }

  /**
   * @returns the isVerified boolean literal.
   *
   */
  get isLoggedIn() {
    return this.isUserVerified;
  }

  /**
   * @returns the current user that is logged in.
   */
  getCurrentUser() {
    return this.currentUser;
  }

  logout() {
   this.authService.auth.signOut()
     .catch((onError) => {
       console.log('Could not log out. Reason: ' + onError);
     })
     .then((onSuccess) => {
       console.log('logged out.');
     })
     .finally(() => {
       this.router.navigate(['login']);
     });
  }
}
