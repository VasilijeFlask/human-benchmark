import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  logIn() {
    localStorage.setItem('login', 'true'); 
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('login')
  }


  logOut() {
    localStorage.removeItem('login')
  }
}
