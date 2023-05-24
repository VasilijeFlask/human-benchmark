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
    const usersString = localStorage.getItem('users');
    this.users = usersString ? JSON.parse(usersString) : [];
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
