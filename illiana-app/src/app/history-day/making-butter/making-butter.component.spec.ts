import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakingButterComponent } from './making-butter.component';

describe('MakingButterComponent', () => {
  let component: MakingButterComponent;
  let fixture: ComponentFixture<MakingButterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakingButterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakingButterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
