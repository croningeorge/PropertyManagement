import { TestBed } from '@angular/core/testing';

import { CityserviceService } from './cityservice.service';

describe('CityserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityserviceService = TestBed.get(CityserviceService);
    expect(service).toBeTruthy();
  });
});
