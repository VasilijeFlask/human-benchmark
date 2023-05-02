import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenceMemoryComponent } from './sequence-memory.component';

describe('SequenceMemoryComponent', () => {
  let component: SequenceMemoryComponent;
  let fixture: ComponentFixture<SequenceMemoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SequenceMemoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SequenceMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
