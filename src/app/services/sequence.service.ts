import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SequenceService {
  private highScoreSource = new BehaviorSubject<number>(this.getInitialHighScore());
  currentHighScore = this.highScoreSource.asObservable();

  constructor() { }

  private getInitialHighScore(): number {
    const storedHighScore = localStorage.getItem('sequenceHighScore');
    // if(storedHighScore === null) {
    //   console.error('No stored high score found in localStorage');
    // }
    const initialHighScore = storedHighScore ? Number(storedHighScore) : 0;
    return initialHighScore;
  }

  updateHighScore(newHighScore: number) {
    localStorage.setItem('sequenceHighScore', newHighScore.toString());
    this.highScoreSource.next(newHighScore);
  }
}
