import { TestBed } from '@angular/core/testing';

import { AdmindietserviceService } from './admindietservice.service';

describe('AdmindietserviceService', () => {
  let service: AdmindietserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmindietserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
