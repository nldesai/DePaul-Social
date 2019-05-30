import { TestBed } from '@angular/core/testing';

import { StudyGroupService } from './studygroup.service';

describe('StudygroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudyGroupService = TestBed.get(StudyGroupService);
    expect(service).toBeTruthy();
  });
});
