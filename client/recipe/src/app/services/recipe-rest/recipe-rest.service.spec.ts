import { TestBed } from '@angular/core/testing';

import { RecipeRestService } from './recipe-rest.service';

describe('RecipeRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipeRestService = TestBed.get(RecipeRestService);
    expect(service).toBeTruthy();
  });
});
