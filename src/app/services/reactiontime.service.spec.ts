import { TestBed } from '@angular/core/testing';

import { ReactiontimeService } from './reactiontime.service';

describe('ReactiontimeService', () => {
  let service: ReactiontimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactiontimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
