import { TestBed } from '@angular/core/testing';

import { DatasasaveService } from './datasasave.service';

describe('DatasasaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatasasaveService = TestBed.get(DatasasaveService);
    expect(service).toBeTruthy();
  });
});
