import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User.interface';
import { StorageService } from './storage.service';
import { LoginMessage } from '../models/LoginMessage.interface';
import { ReplaySubject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedInStatus = new BehaviorSubject<boolean>(this._storageService.isLoggedIn());
  private users: User[] = [];
  private currentUser: User | null = null

  constructor(private _http: HttpClient, private _storageService: StorageService) {
    this.initializeService();
  }

  // Initialization
  private initializeService(): void {
    this.loadUsers();
    this.loadCurrentUser();
    this.loggedInStatus.next(this._storageService.isLoggedIn());
  }

  // User operations
  addUser(user: User): boolean {
    if (this.users.some(u => u.username === user.username)) {
      return false;
    }
    
    user.signupTime = new Date();
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
    return true;
  }

  // Login operations
  isLoggedIn(): Observable<boolean> {
    return this.loggedInStatus.asObservable();
  }

  login(username: string, password: string): ReplaySubject<LoginMessage> {
    let subject = new ReplaySubject<LoginMessage>(1)
  
    const usersString = localStorage.getItem('users');
    const users = usersString ? JSON.parse(usersString) : [];
  
    let user = users.filter((el: User) => el.password === password && el.username === username)
    let hasUser = users.filter((el: User) => el.username === username)
  
    if (user.length) {
      this.currentUser = user[0]
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      this._storageService.logIn();
      this.loggedInStatus.next(true);
      subject.next({ok: true, message: 'Successfully logged in'});
    } else {
      subject.next({ok: false, message: hasUser.length ? 'Wrong password' : 'Username does not exist'});
    }
  
    return subject;
  }

  logOut(): void {
    this._storageService.logOut()
    this.loggedInStatus.next(false)
    this.currentUser = null
    localStorage.removeItem('currentUser')
  }

  // Load operations
  private loadUsers(): void {
    // Retrieve 'users' string from local storage
    const usersString = localStorage.getItem('users');
  
    // Check if we got something back
    if (usersString !== null) {
      // Parse the string back into an array of users.
      const usersArray = JSON.parse(usersString);
  
      // Iterate over each user and convert the signupTime from string to Date.
      for (let i = 0; i < usersArray.length; i++) {
        // Create a new Date from the signupTime string
        const signupDate = new Date(usersArray[i].signupTime);
        // Replace the old signupTime string with the new Date
        usersArray[i].signupTime = signupDate;
      }
  
      // Assign the processed users array back to this.users.
      this.users = usersArray;
    } else {
      // If we didn't get anything back from local storage, initialize this.users with an empty array.
      this.users = [];
    }
  }
  

  private loadCurrentUser(): void {
    const currentUserString = localStorage.getItem('currentUser');
    this.currentUser = currentUserString ? JSON.parse(currentUserString) : null;
  }

  

  // Current User operations
  getCurrentUser(): User | null {
    return this.currentUser;
  }
}
