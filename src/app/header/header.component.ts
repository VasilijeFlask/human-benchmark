import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn!: Observable<boolean>;
  private subscription!: Subscription;

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.isLoggedIn = this._userService.isLoggedIn();
  }

  logout(): void {
    this._userService.logOut()
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
