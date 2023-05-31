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

  constructor(private _storageService: StorageService) {
    this.initializeService();
  }

  
  private initializeService(): void {
    this.loadUsers();
    this.loadCurrentUser();
    this.loggedInStatus.next(this._storageService.isLoggedIn());
  }


  addUser(user: User): boolean {
    if (this.users.some(u => u.username === user.username)) {
      return false;
    }
    
    user.signupTime = new Date();
    user.highScores = {
      reactionTime: 0,
      sequence: 0
    }
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
    return true;
  }


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

  
  private loadUsers(): void {
    const usersString = localStorage.getItem('users');

    if (usersString !== null) {
      const usersArray = JSON.parse(usersString);

      for (let i = 0; i < usersArray.length; i++) {
        const signupDate = new Date(usersArray[i].signupTime);
        usersArray[i].signupTime = signupDate;
      }
      this.users = usersArray;

    } else {
      this.users = [];
    }
  }
  

  private loadCurrentUser(): void {
    const currentUserString = localStorage.getItem('currentUser');
    this.currentUser = currentUserString ? JSON.parse(currentUserString) : null;
  }

  

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  updateHighScore(username: string, game: string, score: number): void {
    const user = this.users.find(u => u.username === username);
    if (user) {
      user.highScores[game] = score;
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }
  
  getHighScore(username: string, game: string): number {
    const user = this.users.find(u => u.username === username);
    return user ? user.highScores[game] : 0;
  }
  
}
