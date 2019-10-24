import { TestBed } from '@angular/core/testing';

import { SubscriptionplanService } from './subscriptionplan.service';

describe('SubscriptionplanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubscriptionplanService = TestBed.get(SubscriptionplanService);
    expect(service).toBeTruthy();
  });
});
