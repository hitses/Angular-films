import { TestBed } from '@angular/core/testing';

import { MoviesIdService } from './movies-id.service';

describe('MoviesIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesIdService = TestBed.get(MoviesIdService);
    expect(service).toBeTruthy();
  });
});
