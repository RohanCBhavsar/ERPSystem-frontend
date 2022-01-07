import { TestBed } from '@angular/core/testing';

import { ApiMangerService } from './api-manger.service';

describe('ApiMangerService', () => {
  let service: ApiMangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMangerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
