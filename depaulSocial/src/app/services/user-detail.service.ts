import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// holds information from the local storage retrieved on home component.
export class UserDetailService {
  email = '';
  id = '';

  constructor() {}
  setEmail(email: string) {
    this.email = email;
  }

  setUserID(id: string) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  getUserEmail() {
    return this.email;
  }

}
