import { TestBed } from '@angular/core/testing';

import { MJDataService } from './mj-data.service';

describe('MJDataService', () => {
  let service: MJDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MJDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
