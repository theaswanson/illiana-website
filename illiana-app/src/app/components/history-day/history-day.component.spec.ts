import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDayComponent } from './history-day.component';

describe('HistoryDayComponent', () => {
  let component: HistoryDayComponent;
  let fixture: ComponentFixture<HistoryDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
