import { Component } from '@angular/core';
import { User } from '../models/User.interface';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  user: User = {username: '', password: ''};
  confirmPassword = ''
  error = '';

  constructor(private userService: UserService, private _router: Router) {}

  signUp(): void {
    if (this.user.password !== this.confirmPassword) {
      this.error = 'Password does not match'
    } else if (this.userService.addUser(this.user)) {
      this._router.navigate(['/login'])}
     else {
      this.error = 'Username already exists';
    }
  }
}
