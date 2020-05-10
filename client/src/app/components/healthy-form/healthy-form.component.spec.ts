import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthyFormComponent } from './healthy-form.component';

describe('HealthyFormComponent', () => {
  let component: HealthyFormComponent;
  let fixture: ComponentFixture<HealthyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
