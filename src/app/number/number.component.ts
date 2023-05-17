import { Component } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent {
  first = 'The average person can only remember 7 digit numbers reliably, but it is possible to do much better using mnemonic techniques. Some helpful links are provided below.'
  second = 'Mnemonic major system'
  third = 'Dominic system'
  fourth = 'Katapayadi system'
  fifth = 'Mnemonic devices'
  pageData: number[] = [0, 10, 3, 3, 5, 10, 25, 60, 110, 140, 100, 70, 30, 20, 18, 16, 14, 12, 10]
  pageLabels: string[] = ['0pts', '1pts', '2pts', '3pts', '4pts', '5pts', '6pts', '7pts', '8pts', '9pts', '10pts', '11pts', '12pts', '13pts', '14pts', '15pts', '16pts', '17pts', '18pts', '19pts', ]
}
