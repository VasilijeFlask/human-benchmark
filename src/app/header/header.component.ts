import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn!: Observable<boolean>;
  private subscription!: Subscription;

  constructor(private _userService: UserService, private _storageService: StorageService, private _router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this._userService.isLoggedIn();
  }

  logout(): void {
    this._userService.logOut()
    this._storageService.logOut()
    console.log('logged out')
    this._router.navigate(['/home'])
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
