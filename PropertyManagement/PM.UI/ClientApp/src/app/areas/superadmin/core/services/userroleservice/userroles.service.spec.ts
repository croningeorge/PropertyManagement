import { TestBed } from '@angular/core/testing';

import { UserrolesService } from './userroles.service';

describe('UserrolesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserrolesService = TestBed.get(UserrolesService);
    expect(service).toBeTruthy();
  });
});
