import { TestBed } from '@angular/core/testing';

import { AreaserviceService } from './areaservice.service';

describe('AreaserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AreaserviceService = TestBed.get(AreaserviceService);
    expect(service).toBeTruthy();
  });
});
