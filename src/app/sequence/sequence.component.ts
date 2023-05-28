import { Component } from '@angular/core';


@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.scss']
})
export class SequenceComponent {

showElements = false
showGame = false
currentTileIndex!: number; 
level = 1
showResult = false

randomNumber = Math.floor(Math.random() * 9);

tiles = Array.from({length: 3}, () => Array(3).fill(null));
activeTiles = Array.from({length: 3}, () => Array(3).fill(false));

activatedTilesHistory: {row: number, col:number} [] = []

constructor() {}

ngOnInit(): void {}


// Initialization
startGame() {
  this.showElements = true;
  this.showGame = true;
  this.currentTileIndex = 0;
  this.level = 1;
  this.activatedTilesHistory = [];
  this.activateNextTile();
}

restartGame() {
  this.showElements = false
  this.showGame = false
  this.currentTileIndex = 0
  this.level = 1
  this.showResult = false

  this.tiles = Array.from({length: 3}, () => Array(3).fill(null));
  this.activeTiles = Array.from({length: 3}, () => Array(3).fill(false));

  this.startGame()
}


// Game in progress

activateNextTile() {
  const randomRow = Math.floor(Math.random() * 3);
  const randomCol = Math.floor(Math.random() * 3);
  this.activatedTilesHistory.push({ row: randomRow, col: randomCol });


  setTimeout(() => {
    this.activeTiles[randomRow][randomCol] = true;
  }, 2000);

  setTimeout(() => {
    this.activeTiles[randomRow][randomCol] = false;
  }, 2500);
}

activateFirstTile() {
  const firstTile = this.activatedTilesHistory[0];
  this.activeTiles[firstTile.row][firstTile.col] = true;

  setTimeout(() => {
    this.activeTiles[firstTile.row][firstTile.col] = false;
  }, 500);
}


  
nextLevel() {
  console.log('wtf')

  // After the first tile has finished flashing, activate the next tile
  setTimeout(() => {
    this.activateFirstTile();

    this.activateNextTile();
  }, 500);
}


tileClicked(row: number, col: number) {
  const currentActivatedTile = this.activatedTilesHistory[this.currentTileIndex];

  if (row === currentActivatedTile.row && col === currentActivatedTile.col) {
    // User clicked the right tile
    this.currentTileIndex += 1;

    if (this.currentTileIndex === this.activatedTilesHistory.length) {
      // User has clicked all tiles in sequence. Move to the next level.
      this.currentTileIndex = 0;
      this.level += 1;
      this.nextLevel()
    }
  } else {
    // User clicked the wrong tile. Game over.
    this.showResult = true;
    this.showGame = true;
    this.showElements = true;
    console.log(this.level)
  }

}







  first = 'Memorize the sequence of buttons that light up, then press them in order.'
  second = 'Every time you finish the pattern, it gets longer.'
  third = 'Make a mistake, and the test is over.'
  pageLabels: string[] = ['1', '2', '3', '4', '5', '6', '7', '8','9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29']
  pageData: number[] = [0, 10, 20, 8, 15, 25, 35, 58, 54, 38, 35, 30, 25, 20, 18, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3 ]
}
