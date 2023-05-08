import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.scss']
})
export class ReactionComponent implements OnInit {
  constructor() {}

  getDescription(): string {
    const description = 'Here i will place something '
    const something = 'something'
    const link = '<a href="https://example.com">' + something + '</a>';
    
    return description.replace(something, link);
  }
  
  ngOnInit(): void {}
}
