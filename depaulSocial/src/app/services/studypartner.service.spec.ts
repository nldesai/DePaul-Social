import { TestBed } from '@angular/core/testing';

import { StudypartnerService } from './studypartner.service';

describe('StudypartnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudypartnerService = TestBed.get(StudypartnerService);
    expect(service).toBeTruthy();
  });
});
