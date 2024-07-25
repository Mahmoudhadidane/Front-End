import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserCheckingsComponent } from './view-user-checkings.component';

describe('ViewUserCheckingsComponent', () => {
  let component: ViewUserCheckingsComponent;
  let fixture: ComponentFixture<ViewUserCheckingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUserCheckingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUserCheckingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
