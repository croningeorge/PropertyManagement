import { TestBed } from '@angular/core/testing';

import { CountryserviceService } from './countryservice.service';

describe('CountryserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryserviceService = TestBed.get(CountryserviceService);
    expect(service).toBeTruthy();
  });
});
