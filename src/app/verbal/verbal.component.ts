import { Component } from '@angular/core';

@Component({
  selector: 'app-verbal',
  templateUrl: './verbal.component.html',
  styleUrls: ['./verbal.component.scss']
})
export class VerbalComponent {
  first = 'This test measures how many words you can keep in short term memory at once.'
  second = 'The number of words you need to remember grows continually, until you can not keep them in your head anymore.'
  third = 'Go as long as you can. You have 3 strikes until game over.'
  fourth = 'Your score is how many turns you lasted.'
  pageData: number[] = [100, 80, 110, 120, 105, 83, 70, 65, 60, 55, 50, 40, 30, 20, 10, 8, 7, 6, 4 ]
  pageLabels: string[] = ['0pts', '10pts', '20pts', '30pts', '40pts', '50pts', '60pts', '70pts', '80pts', '90pts', '100pts', '110pts', '120pts', '130pts', '140pts', '150pts', '160pts', '170pts', '180pts', '190pts']
}
