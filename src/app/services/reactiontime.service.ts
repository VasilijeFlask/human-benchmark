import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReactiontimeService {

  private reactionTimeSource = new BehaviorSubject<number>(0);
  currentReactionTime: Observable<number> = this.reactionTimeSource.asObservable();
  
  private highScoreSource = new BehaviorSubject<number>(0);
  currentHighScore: Observable<number> = this.highScoreSource.asObservable();
  

  constructor() { 

    const storedHighScore = localStorage.getItem('highScore')
    const initialHighScore = storedHighScore ? Number(storedHighScore) : 0;
    this.highScoreSource.next(initialHighScore);
  }
  
  updateReactionTime(time: number) {
    const storedHighScore = Number(localStorage.getItem('highScore')) || Infinity;
    if (time < storedHighScore) {
        localStorage.setItem('highScore', time.toString());
        this.highScoreSource.next(time);
    }
    this.reactionTimeSource.next(time);
}
}
