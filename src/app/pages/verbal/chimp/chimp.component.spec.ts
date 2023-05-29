import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChimpComponent } from './chimp.component';

describe('ChimpComponent', () => {
  let component: ChimpComponent;
  let fixture: ComponentFixture<ChimpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChimpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChimpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
