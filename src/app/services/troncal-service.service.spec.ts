import { TestBed } from '@angular/core/testing';

import { TroncalServiceService } from './troncal-service.service';

describe('TroncalServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TroncalServiceService = TestBed.get(TroncalServiceService);
    expect(service).toBeTruthy();
  });
});
