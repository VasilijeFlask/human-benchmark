import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberMemoryComponent } from './number-memory.component';

describe('NumberMemoryComponent', () => {
  let component: NumberMemoryComponent;
  let fixture: ComponentFixture<NumberMemoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberMemoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
