import {UserDetailsFirebaseI} from './user-details-firebase-i';

export class UserDetailsFirebase implements UserDetailsFirebaseI {
  _email: string;
  _uid: string;

  constructor() {}

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get uid(): string {
    return this._uid;
  }

  set uid(value: string) {
    this._uid = value;
  }
}
