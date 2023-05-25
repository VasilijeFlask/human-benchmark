import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReactiontimeService {

  // deklarisemo reactionTimeSource kao novi BehaviorSubject sa 
  // pocetnom vrednoscu 0. BehaviorSubject storuje trenutnu vrednost - 
  // odnosno svaki sub dobije vrednost odmah po subskripciji

  private reactionTimeSource!: BehaviorSubject<number>
  currentReactionTime: Observable<number>

  constructor() { 
    const storedReactionTime = localStorage.getItem('score');
    const initialReactionTime = storedReactionTime ? Number(storedReactionTime) : 0;
    this.reactionTimeSource = new BehaviorSubject<number>(initialReactionTime);
    this.currentReactionTime = this.reactionTimeSource.asObservable();
  }

  // pravimo metodu koja ce da updatuje reactionTimeSource sa novom vrednoscu.
  // ta nova vrednost ce bii emitovana svim subovima
  updateReactionTime(time: number) {
    localStorage.setItem('score', time.toString())
    this.reactionTimeSource.next(time)
  }

}
