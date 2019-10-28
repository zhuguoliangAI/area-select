import { TestBed } from '@angular/core/testing';

import { MultipleAreaSelectService } from './multiple-area-select.service';

describe('MultipleAreaSelectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultipleAreaSelectService = TestBed.get(MultipleAreaSelectService);
    expect(service).toBeTruthy();
  });
});
