import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  error = ''
  

  constructor(private _userService: UserService, private _router: Router) {
    
  }

  login(): void {
    this._userService.login(this.username, this.password).subscribe((data) => {
      if(data.ok) {
        this._router.navigate(['/home']);
      } else {
        this.error = data.message;
      }
    })
  }
}
