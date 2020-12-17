import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingPressComponent } from './printing-press.component';

describe('PrintingPressComponent', () => {
  let component: PrintingPressComponent;
  let fixture: ComponentFixture<PrintingPressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintingPressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintingPressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
