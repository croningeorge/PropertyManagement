import { TestBed } from '@angular/core/testing';

import { PlantypeserviceService } from './plantypeservice.service';

describe('PlantypeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlantypeserviceService = TestBed.get(PlantypeserviceService);
    expect(service).toBeTruthy();
  });
});
