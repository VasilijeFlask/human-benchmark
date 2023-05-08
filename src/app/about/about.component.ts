import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  constructor() {
    this.about = ''
  }
  @Input() about: string;

  ngOnInit(): void {
    
  }
}
