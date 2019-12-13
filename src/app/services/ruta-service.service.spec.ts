import { TestBed } from '@angular/core/testing';

import { RutaServiceService } from './ruta-service.service';

describe('RutaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RutaServiceService = TestBed.get(RutaServiceService);
    expect(service).toBeTruthy();
  });
});
