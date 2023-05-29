import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private data: number[] = [];

  constructor() { }

  addData(data: number): void {
    this.data.push(data);
  }


  getData(): number[] {
    return this.data;
  }
}
