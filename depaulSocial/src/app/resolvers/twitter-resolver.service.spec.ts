import { TestBed } from '@angular/core/testing';

import { TwitterResolverService } from './twitter-resolver.service';

describe('TwitterResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwitterResolverService = TestBed.get(TwitterResolverService);
    expect(service).toBeTruthy();
  });
});
