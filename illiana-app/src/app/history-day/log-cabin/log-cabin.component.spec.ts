import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogCabinComponent } from './log-cabin.component';

describe('LogCabinComponent', () => {
  let component: LogCabinComponent;
  let fixture: ComponentFixture<LogCabinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogCabinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogCabinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
