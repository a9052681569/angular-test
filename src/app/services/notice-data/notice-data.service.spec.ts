import { TestBed } from '@angular/core/testing';

import { NoticeDataService } from './notice-data.service';

describe('NoticeDataService', () => {
  let service: NoticeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
