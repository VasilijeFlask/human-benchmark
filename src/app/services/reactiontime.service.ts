import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReactiontimeService {

  // deklarisemo reactionTimeSource kao novi BehaviorSubject sa 
  // pocetnom vrednoscu 0. BehaviorSubject storuje trenutnu vrednost - 
  // odnosno svaki sub dobije vrednost odmah po subskripciji

  private reactionTimeSource = new BehaviorSubject<number>(0)

  // pravimo observable kako bi druge komponente mogle da se subuju na to
  currentReactionTime = this.reactionTimeSource.asObservable()

  constructor() { 
    const storedReactionTime = localStorage.getItem('score');
    const initialReactionTime = storedReactionTime ? Number(storedReactionTime) : 0
    this.reactionTimeSource = new BehaviorSubject<number>(initialReactionTime)
  }

  // pravimo metodu koja ce da updatuje reactionTimeSource sa novom vrednoscu.
  // ta nova vrednost ce bii emitovana svim subovima
  updateReactionTime(time: number) {
    localStorage.setItem('score', time.toString())
    this.reactionTimeSource.next(time)
  }

}
