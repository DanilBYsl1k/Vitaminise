import { TestBed } from '@angular/core/testing';

import { CheckCarService } from './check-car.service';

describe('CheckCarService', () => {
  let service: CheckCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
