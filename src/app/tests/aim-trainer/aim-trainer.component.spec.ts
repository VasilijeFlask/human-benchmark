import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AimTrainerComponent } from './aim-trainer.component';

describe('AimTrainerComponent', () => {
  let component: AimTrainerComponent;
  let fixture: ComponentFixture<AimTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AimTrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AimTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
