import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../shared/nav/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUserSubject = new BehaviorSubject<User | null>(null);

  constructor() { }

  setCurrentUser(user: User | null) {
    this.currentUserSubject.next(user);
  }

  public get currentUser(): User | null {
    return this.currentUserSubject.value;
  }
}
