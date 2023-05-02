import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionTimeComponent } from './reaction-time.component';

describe('ReactionTimeComponent', () => {
  let component: ReactionTimeComponent;
  let fixture: ComponentFixture<ReactionTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactionTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactionTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
