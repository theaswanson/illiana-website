import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallFestivalComponent } from './fall-festival.component';

describe('FallFestivalComponent', () => {
  let component: FallFestivalComponent;
  let fixture: ComponentFixture<FallFestivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FallFestivalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FallFestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
