import { Component } from '@angular/core';
import { SequenceService } from '../services/sequence.service';
import { StatisticsService } from '../services/statistics.service';


@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.scss']
})
export class SequenceComponent {
  
  // Data members
  showElements = false
  showGame = false
  currentTileIndex!: number; 
  level = 1
  showResult = false
  tiles = Array.from({length: 3}, () => Array(3).fill(null));
  activeTiles = Array.from({length: 3}, () => Array(3).fill(false));
  activatedTilesHistory: {row: number, col:number} [] = []
  randomNumber = Math.floor(Math.random() * 9);
  first = 'Memorize the sequence of buttons that light up, then press them in order.'
  second = 'Every time you finish the pattern, it gets longer.'
  third = 'Make a mistake, and the test is over.'
  pageLabels: string[] = ['1', '2', '3', '4', '5', '6', '7', '8','9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29']
  pageData: number[] = [0, 10, 20, 8, 15, 25, 35, 58, 54, 38, 35, 30, 25, 20, 18, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3 ]
  highScore!: number;

  constructor(private sequenceService: SequenceService,
              private statisticsService: StatisticsService) {}

  ngOnInit(): void {
    this.sequenceService.currentHighScore.subscribe(highScore => this.highScore = highScore)
  }

  // Game Initialization
  startGame() {
    this.showElements = true;
    this.showGame = true;
    this.currentTileIndex = 0;
    this.level = 1;
    this.activatedTilesHistory = [];
    this.chooseNextTile();
    setTimeout(() => {
      this.flashTile(0);
    }, 1000)
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

  // Game Actions
  tileClicked(row: number, col: number) {
    const currentActivatedTile = this.activatedTilesHistory[this.currentTileIndex];

    if (row === currentActivatedTile.row && col === currentActivatedTile.col) {
      this.currentTileIndex += 1;

      if (this.currentTileIndex === this.activatedTilesHistory.length) {
        this.currentTileIndex = 0;
        this.level += 1;
        this.nextLevel()
      }
    } else {
      this.showResult = true;
      this.showGame = true;
      this.showElements = true;
      if (this.level - 1 > this.highScore) {
        this.sequenceService.updateHighScore(this.level - 1)
      }
      this.statisticsService.addData(this.level - 1)
      
    }
  }

  // Tile activation
  chooseNextTile() {
    const randomRow = Math.floor(Math.random() * 3);
    const randomCol = Math.floor(Math.random() * 3);
    this.activatedTilesHistory.push({ row: randomRow, col: randomCol });
  }

  flashTile(index: number) {
    if (this.activatedTilesHistory[index]) {
      const tile = this.activatedTilesHistory[index];
      this.activeTiles[tile.row][tile.col] = true;

      setTimeout(() => {
        this.activeTiles[tile.row][tile.col] = false;
      }, 500);
    }
  }

  nextLevel() {
    this.chooseNextTile();

    setTimeout(() => {
      this.flashTile(this.level - 1);
    }, 1000);
  }
}
