import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantInfoComponent } from './grant-info.component';

describe('GrantInfoComponent', () => {
  let component: GrantInfoComponent;
  let fixture: ComponentFixture<GrantInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrantInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
