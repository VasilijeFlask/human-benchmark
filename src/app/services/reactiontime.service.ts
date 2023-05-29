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
    // const storedReactionTime = localStorage.getItem('score');
    // if(storedReactionTime === null) {
    //   console.error('No stored reaction time found in localStorage');
    // }
    // const initialReactionTime = storedReactionTime ? Number(storedReactionTime) : 0;
    // this.reactionTimeSource.next(initialReactionTime);
  

    
    const storedHighScore = localStorage.getItem('highScore')
    // if(storedHighScore === null) {
    //   console.error('No stored high score found in localStorage');
    // }
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
