import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service'
import { User } from '../models/User.interface';
import { ReactiontimeService } from '../services/reactiontime.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  currentUser: User | null = null;
  reactionTime: number = 0;
  private subscription!: Subscription;

  constructor(private userService: UserService, private reactionTimeService: ReactiontimeService) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    this.subscription = this.reactionTimeService.currentReactionTime.subscribe(time => this.reactionTime = time);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
