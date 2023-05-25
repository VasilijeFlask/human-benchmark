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
    if(storedReactionTime === null) {
      console.error('No stored reaction time found in localStorage');
    }
    const initialReactionTime = storedReactionTime ? Number(storedReactionTime) : 0;
    this.reactionTimeSource.next(initialReactionTime);
  
    const storedHighScore = localStorage.getItem('highScore')
    if(storedHighScore === null) {
      console.error('No stored high score found in localStorage');
    }
    const initialHighScore = storedHighScore ? Number(storedHighScore) : 0;
    this.highScoreSource.next(initialHighScore);
  }
  
  

  // pravimo metodu koja ce da updatuje reactionTimeSource sa novom vrednoscu.
  // ta nova vrednost ce bii emitovana svim subovima
  // updateReactionTime(time: number) {
  //   localStorage.setItem('score', time.toString())
  //   this.reactionTimeSource.next(time)
  // }


  updateReactionTime(time: number) {
    console.log('Reaction time:', time);
    const storedHighScore = Number(localStorage.getItem('highScore')) || Infinity;
    console.log('Stored high score:', storedHighScore);
    if (time < storedHighScore) {
        localStorage.setItem('highScore', time.toString());
        this.highScoreSource.next(time);
        console.log('Updated high score:', time); // log here
    }
    this.reactionTimeSource.next(time);
    console.log('score')

}

  
}
