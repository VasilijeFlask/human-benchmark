import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  @Input() first: string;
  @Input() second: string;
  @Input() third: string;
  @Input() fourth: string;
  @Input() fifth: string;
  @Input() sixth: string;
  @Input() seventh: string;
  @Input() eight: string;


  constructor() {
    this.first = ''
    this.second = ''
    this.third = ''
    this.fourth = ''
    this.fifth = ''
    this.sixth = ''
    this.seventh = ''
    this.eight = ''

  }
  ngOnInit(): void {
    
  }
}
