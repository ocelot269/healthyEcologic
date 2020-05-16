import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthyLoginComponent } from './healthy-login.component';

describe('HealthyLoginComponent', () => {
  let component: HealthyLoginComponent;
  let fixture: ComponentFixture<HealthyLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthyLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
