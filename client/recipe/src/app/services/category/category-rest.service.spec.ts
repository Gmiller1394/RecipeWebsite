import { TestBed } from '@angular/core/testing';

import { CategoryRestService } from './category-rest.service';

describe('CategoryRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryRestService = TestBed.get(CategoryRestService);
    expect(service).toBeTruthy();
  });
});
