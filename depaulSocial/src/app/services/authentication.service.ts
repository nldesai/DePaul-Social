import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

import UserCredential = firebase.auth.UserCredential;
import * as firebase from 'firebase';
import {User, UserInfo} from 'firebase';
import {LocalStorage} from '@ngx-pwa/local-storage';
import {UserDetailsFirebase} from '../models/user-details-firebase';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  // current user in firebase.
  public currentUser: User = firebase.auth().currentUser;
  // will keep track of the user's state: verified or not
  public isUserVerified: boolean;


  constructor(private authService: AngularFireAuth,
              private router: Router,
              private localStorage: LocalStorage) {
  }

  /**
   * Function for the login component.
   * @returns the current user trying to log in.
   */
  checkUserCredentials(email: string, password: string): Promise<UserCredential> {
    return this.authService.auth.signInWithEmailAndPassword(email, password)
      .catch((onFailure) => {
        console.log('Failed credentials.' + onFailure);
      })
      .then((currentUser: UserCredential) => {
        this.authService.auth.setPersistence(firebase.auth.Auth.Persistence.SESSION); // persist the user session until it logs out.
        return currentUser;
      });
  }

  /**
   * @param status
   * If the function checkUserCredentials() returns an object of UserCredential, then
   * this function will be called from the login.component.ts to set the status to true,
   * so that the login.guard.ts lets the user log in.
   */
  setVerifiedUserStatus(status: boolean) {
    this.isUserVerified = status;
    this.localStorage.setItem('verifiedUser', this.isUserVerified).subscribe(didSubscribe => {
      console.log('Current user`s status saved in local storage.' + didSubscribe);
    }, error1 => {
      console.log('Could not save current user`s status in local storage.' + error1);
    });
  }

  /**
   * @returns the isVerified boolean literal from the local storage.
   *
   */
  getIsLoggedIn() {
    return this.localStorage.getItem('verifiedUser');
  }

  /**
   * @returns the current user that is logged in and saves it to the local storage.
   */
  getCurrentSignInUser(): UserDetailsFirebase {
    const firebaseUserx: UserDetailsFirebase = new UserDetailsFirebase();

    this.authService.auth.onAuthStateChanged((user: User) => {
      const firebaseUser: UserDetailsFirebase = new UserDetailsFirebase();
      if (user) {
        this.localStorage.setItem('userID', user.uid).subscribe(() => {});
        this.localStorage.setItem('email', user.email).subscribe(() => {});
      } else {
        console.log('No user is signed in.');
      }
    });

    this.localStorage.getItem('userID').subscribe((value =>  {
      firebaseUserx.uid = value;
    }), error1 =>  {
      console.log('Could not retrieve userID from local storage.');
    });
    this.localStorage.getItem('email').subscribe((value =>  {
      firebaseUserx.email = value;
    }), error1 =>  {
      console.log('Could not get email from local storage.');
    });

    return firebaseUserx;
  }


  sendEmailVerification() {
    this.currentUser.sendEmailVerification()
      .then((success) => {
        console.log('Email sent! ' + success);
      })
      .catch((error) => {
        console.log('Could not send email verification. ' + error);
      });
  }

  deleteCurrentSignInUser() {
    this.currentUser.delete()
      .catch((error) => {
        console.log('Could not delete user.' + error);
      })
      .then((success) => {
        console.log('UserDU was deleted. ' + success);
      });
    this.localStorage.removeItem('verifiedUser').subscribe(user => {
      console.log('Log in status deleted ' + user);
    }, error1 =>  {
      console.log('Could not delete log in status. ' + error1);
    });

    this.localStorage.removeItem('user').subscribe(user => {
      console.log('Removed signed in user from local storage. ' + user);
    }, error1 =>  {
      console.log('Could not remove signed in user from local storage. ' + error1);
    });
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
    // delete the user from local storage.
    this.localStorage.removeItem('verifiedUser').subscribe(user => {
      console.log('Log in status deleted ' + user);
    }, error1 =>  {
      console.log('Could not delete log in status. ' + error1);
    });

    this.localStorage.removeItem('user').subscribe(user => {
      console.log('Removed signed in user from local storage. ' + user);
    }, error1 =>  {
      console.log('Could not remove signed in user from local storage. ' + error1);
    });
  }

  sendPasswordResetEmail() {
    this.authService.auth.sendPasswordResetEmail(this.getCurrentSignInUser().email)
      .catch(error => {
        console.log('Could not send reset password email. ' + error);
      })
      .then((value => {
        console.log('Email password reset sent to: ' + this.getCurrentSignInUser().email);
      }));
  }

  getUserId() {
    const user: UserDetailsFirebase = this.getCurrentSignInUser();
    return user.uid;
  }
}
