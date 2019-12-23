import { TestBed } from '@angular/core/testing';

import { ResolvedataService } from './resolvedata.service';

describe('ResolvedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolvedataService = TestBed.get(ResolvedataService);
    expect(service).toBeTruthy();
  });
});
