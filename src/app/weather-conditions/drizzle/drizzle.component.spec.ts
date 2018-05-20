import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrizzleComponent } from './drizzle.component';

describe('DrizzleComponent', () => {
  let component: DrizzleComponent;
  let fixture: ComponentFixture<DrizzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrizzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrizzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
