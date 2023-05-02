import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChimpTestComponent } from './chimp-test.component';

describe('ChimpTestComponent', () => {
  let component: ChimpTestComponent;
  let fixture: ComponentFixture<ChimpTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChimpTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChimpTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
