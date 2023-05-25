import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReactiontimeService {

  // deklarisemo reactionTimeSource kao novi BehaviorSubject sa 
  // pocetnom vrednoscu 0. BehaviorSubject storuje trenutnu vrednost - 
  // odnosno svaki sub dobije vrednost odmah po subskripciji

  private reactionTimeSource = new BehaviorSubject<number>(0);
  currentReactionTime: Observable<number> = this.reactionTimeSource.asObservable();
  
  private highScoreSource = new BehaviorSubject<number>(0);
  currentHighScore: Observable<number> = this.highScoreSource.asObservable();
  

  constructor() { 
    const storedReactionTime = localStorage.getItem('score');
    const initialReactionTime = storedReactionTime ? Number(storedReactionTime) : 0;
    this.reactionTimeSource.next(initialReactionTime);
  
    const storedHighScore = localStorage.getItem('highscore')
    const initialHighScore = storedHighScore ? Number(storedHighScore) : 0
    this.highScoreSource.next(initialHighScore);
  }
  

  // pravimo metodu koja ce da updatuje reactionTimeSource sa novom vrednoscu.
  // ta nova vrednost ce bii emitovana svim subovima
  // updateReactionTime(time: number) {
  //   localStorage.setItem('score', time.toString())
  //   this.reactionTimeSource.next(time)
  // }


  updateReactionTime(time: number) {
    const storedHighScore = Number(localStorage.getItem('highScore')) || Infinity;
    
    if (time < storedHighScore) {
        localStorage.setItem('highScore', time.toString());
        this.highScoreSource.next(time);
        console.log('highscore')
    }
    this.reactionTimeSource.next(time);
    console.log('score')

}

  
}
