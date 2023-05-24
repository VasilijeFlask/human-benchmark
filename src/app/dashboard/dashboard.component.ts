import { Component } from '@angular/core';
import { UserService } from '../services/user.service'
import { User } from '../models/User.interface';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  currentUser: User | null = null

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
  }
}
