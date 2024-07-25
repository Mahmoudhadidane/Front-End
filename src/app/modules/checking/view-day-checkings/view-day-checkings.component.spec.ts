import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDayCheckingsComponent } from './view-day-checkings.component';

describe('ViewDayCheckingsComponent', () => {
  let component: ViewDayCheckingsComponent;
  let fixture: ComponentFixture<ViewDayCheckingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDayCheckingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDayCheckingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
