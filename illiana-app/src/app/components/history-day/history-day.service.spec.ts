import { TestBed } from '@angular/core/testing';

import { HistoryDayService } from './history-day.service';

describe('HistoryDayService', () => {
  let service: HistoryDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
