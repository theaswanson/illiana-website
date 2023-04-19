import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyHallComponent } from './assembly-hall.component';

describe('AssemblyHallComponent', () => {
  let component: AssemblyHallComponent;
  let fixture: ComponentFixture<AssemblyHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssemblyHallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssemblyHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
