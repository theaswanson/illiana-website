import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakingCornBreadComponent } from './making-corn-bread.component';

describe('MakingCornBreadComponent', () => {
  let component: MakingCornBreadComponent;
  let fixture: ComponentFixture<MakingCornBreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakingCornBreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakingCornBreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
