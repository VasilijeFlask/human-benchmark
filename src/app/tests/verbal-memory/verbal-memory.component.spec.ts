import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbalMemoryComponent } from './verbal-memory.component';

describe('VerbalMemoryComponent', () => {
  let component: VerbalMemoryComponent;
  let fixture: ComponentFixture<VerbalMemoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerbalMemoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerbalMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
