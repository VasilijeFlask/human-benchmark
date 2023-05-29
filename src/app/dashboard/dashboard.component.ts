import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service'
import { User } from '../models/User.interface';
import { ReactiontimeService } from '../services/reactiontime.service';
import { SequenceService } from '../services/sequence.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  currentUser: User | null = null;

  private subscriptions: Subscription[] = []

  reactionTime: number = 0;
  reactionHighScore: number = 0

  sequenceHighScore: number = 0
  

  constructor(private userService: UserService, 
              private reactionTimeService: ReactiontimeService,
              private sequenceService: SequenceService) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
  
    this.subscriptions.push(
      this.reactionTimeService.currentReactionTime.subscribe(time => this.reactionTime = time),
      this.reactionTimeService.currentHighScore.subscribe(time => this.reactionHighScore = time),
      this.sequenceService.currentHighScore.subscribe(score => this.sequenceHighScore = score)
    )
  }
  

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
