import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userNameSource = new BehaviorSubject<string | null>(localStorage.getItem('userName'));
  userName$ = this.userNameSource.asObservable();

  setUserName(name: string | null) {
    if (name) {
      localStorage.setItem('userName', name);
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      localStorage.removeItem('userName');
      localStorage.removeItem('isLoggedIn');
    }
    this.userNameSource.next(name);
  }
}
