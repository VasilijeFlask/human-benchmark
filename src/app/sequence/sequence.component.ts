import { Component } from '@angular/core';

@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.scss']
})
export class SequenceComponent {

showElements = false
showGame = false
tiles = Array(9)
randomNumber = Math.floor(Math.random() * 9);
activeTiles: boolean[] = Array(9).fill(false)


constructor() {}

ngOnInit(): void {}

startGame() {
  this.showElements = true
  this.showGame = true

}

firstFlash() {

}

tileClicked(index: number)  {
  console.log(index)
}





  first = 'Memorize the sequence of buttons that light up, then press them in order.'
  second = 'Every time you finish the pattern, it gets longer.'
  third = 'Make a mistake, and the test is over.'
  pageLabels: string[] = ['1', '2', '3', '4', '5', '6', '7', '8','9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29']
  pageData: number[] = [0, 10, 20, 8, 15, 25, 35, 58, 54, 38, 35, 30, 25, 20, 18, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3 ]
}
