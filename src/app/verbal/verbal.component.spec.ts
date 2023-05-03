import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbalComponent } from './verbal.component';

describe('VerbalComponent', () => {
  let component: VerbalComponent;
  let fixture: ComponentFixture<VerbalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerbalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerbalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
