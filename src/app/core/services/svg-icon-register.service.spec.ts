import { TestBed } from '@angular/core/testing';

import { SvgIconRegisterService } from './svg-icon-register.service';

describe('SvgIconRegisterService', () => {
  let service: SvgIconRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvgIconRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
