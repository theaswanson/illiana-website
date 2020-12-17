import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiltingAndSpinningComponent } from './quilting-and-spinning.component';

describe('QuiltingAndSpinningComponent', () => {
  let component: QuiltingAndSpinningComponent;
  let fixture: ComponentFixture<QuiltingAndSpinningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuiltingAndSpinningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiltingAndSpinningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
