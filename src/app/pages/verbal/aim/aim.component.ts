import { Component } from '@angular/core';

@Component({
  selector: 'app-aim',
  templateUrl: './aim.component.html',
  styleUrls: ['./aim.component.scss']
})
export class AimComponent {
  first = 'Click the targets as quickly and accurately as you can.'
  second = 'This tests reflexes and hand-eye coordination.'
  third = 'Once you have clicked 30 targets, your score and average time per target will be displayed.'
  fourth = 'Scores in this test are slower than the simple reaction time test, because you must react and then move the cursor.'
  pageLabels: string[] = ['0ms', '50ms', '100ms', '150ms', '200ms', '250ms', '300ms', '350ms', '400ms', '450ms', '500ms', '550ms', '600ms', '650ms', '700ms', '750ms', '800ms', '850ms', '900ms', '950ms', '1000ms', '1050ms', '1100ms', '1150ms', '1200ms']
  pageData: number[] = [0, 0, 0, 0, 0, 5, 45, 160, 200, 190, 110, 70, 55, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2]
  
}
