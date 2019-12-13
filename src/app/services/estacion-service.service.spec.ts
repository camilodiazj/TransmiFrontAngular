import { TestBed } from '@angular/core/testing';

import { EstacionServiceService } from './estacion-service.service';

describe('EstacionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstacionServiceService = TestBed.get(EstacionServiceService);
    expect(service).toBeTruthy();
  });
});
