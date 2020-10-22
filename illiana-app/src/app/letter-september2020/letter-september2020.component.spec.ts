import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterSeptember2020Component } from './letter-september2020.component';

describe('LetterSeptember2020Component', () => {
  let component: LetterSeptember2020Component;
  let fixture: ComponentFixture<LetterSeptember2020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterSeptember2020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterSeptember2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
