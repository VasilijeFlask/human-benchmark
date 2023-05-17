import { Component } from '@angular/core';

@Component({
  selector: 'app-chimp',
  templateUrl: './chimp.component.html',
  styleUrls: ['./chimp.component.scss']
})
export class ChimpComponent {
  first = 'This is a test of working memory, made famous by a study that found that chimpanzees consistently outperform humans on this task.'
  second = 'In the study, the chimps consistently outperformed humans, and some chimps were able to remember 9 digits over 90% of the time.'
  third = 'This test is a variant of that concept, that gets increasingly difficult every turn, starting at 4 digits, and adding one every turn. If you pass a level, the number increases. If you fail, you get a strike. Three strikes and the test is over.'
  pageData: number[] = [0, 0, 0, 0, 3, 2, 3, 4, 9, 15, 16, 13, 9, 6, 5, 5, 4, 3, 3, 3, 2, 2, 2, 1 ]
  pageLabels: string[] = ['0pts', '1pts', '2pts', '3pts', '4pts', '5pts', '6pts', '7pts', '8pts', '9pts', '10pts', '11pts', '12pts', '13pts', '14pts', '15pts', '16pts', '17pts', '18pts', '19pts', '20pts', '21pts', '22pts', '23pts', '24pts']
}
