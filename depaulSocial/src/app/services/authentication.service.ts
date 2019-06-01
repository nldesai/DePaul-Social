import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { Router} from '@angular/router';

import UserCredential = firebase.auth.UserCredential;
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  // current user's credentials &  its log-in verified status.
  public currentUser: UserCredential;
  public isUserVerified: boolean;

  constructor(private authService: AngularFireAuth, private router: Router){}

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
