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

  private subscriptions: Subscription[] = []
  reactionTime: number = 0;
  highScore: number = 0
  

  constructor(private userService: UserService, private reactionTimeService: ReactiontimeService) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
  
    this.subscriptions.push(
      this.reactionTimeService.currentReactionTime.subscribe(time => this.reactionTime = time),
      this.reactionTimeService.currentHighScore.subscribe((time) => {
        this.highScore = time;
        console.log('Inside high score subscription:', time); // inside the subscription callback
      })
    )
  }
  

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
