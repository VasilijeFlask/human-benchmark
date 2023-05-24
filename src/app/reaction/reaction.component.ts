import { Component, Input, OnInit } from '@angular/core';
import { ReactiontimeService } from '../services/reactiontime.service';

@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.scss']
})
export class ReactionComponent implements OnInit {

  showBox = false;
  showElements = false;
  isGreen = false;
  startTime = 0;
  endTime = 0;
  reactionTime = 0;
  showResult = false;
  showError = false;
  
  //injectujemo reactionTimeService da bismo mogli da ga koristimo
  constructor(private reactionTimeService: ReactiontimeService) {}
  first = 'This is a simple tool to measure your reaction time.'
  second = 'The average (median) reaction time is 273 milliseconds, according to the data collected so far.'
  third = 'In addition to measuring your reaction time, this test is affected by the latency of your computer and monitor. Using a fast computer and low latency / high framerate monitor will improve your score.'
  fourth = 'This is discussed in further detail on the the statistics page. While an average human reaction time may fall between 200-250ms, your computer could be adding 10-50ms on top. Some modern TVs add as much as 150ms!'
  pageLabels: string[] = ['0ms', '25ms', '50ms', '75ms', '100ms', '125ms', '150ms', '175ms', '200ms', '225ms', '250ms', '275ms', '300ms', '325ms', '350ms', '375ms', '400ms', '425ms']
  pageData: number[] = [0, 0, 0, 0, 0, 25, 125, 300, 400, 380, 200, 140, 75, 50, 40, 30, 20, 10]
  

  ngOnInit(): void {}

  startGame() {
    this.showBox = true;
    this.showElements = true
    setTimeout(() => {
      this.isGreen = true;
      this.startTime = Date.now();
    }, Math.random() * (5000 - 1000) + 1000);
  }

  handleClick() {
    if (this.isGreen) {
      this.endTime = Date.now();
      this.reactionTime = this.endTime - this.startTime;
      //dodajemo service da bismo mogli da ga koristimo u dashboardu

      // sta zapravo kaze: uvati ovaj reactionTime, odradi nad njim metodu
      // updateReactionTime, i to sve uradi pomocu reactionTimeService-a
      this.reactionTimeService.updateReactionTime(this.reactionTime)
      this.showBox = false
      this.displayResult()
    } else if (!this.isGreen) {
      this.showBox = false
      this.showError = true
      
      setTimeout(() => {
        this.resetGame()
      }, 1500)
    }}

  displayResult() {
    if (this.reactionTime) {
      this.showResult = true;
    }
  }

  resetGame() {
    this.showBox = false;
    this.showElements = false;
    this.isGreen = false;
    this.startTime = 0;
    this.endTime = 0;
    this.reactionTime = 0;
    this.showResult = false;
    this.showError = false
  }

}

