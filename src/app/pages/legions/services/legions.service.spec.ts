import { TestBed } from '@angular/core/testing';

import { LegionsService } from './legions.service';

describe('LegionsService', () => {
  let service: LegionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
