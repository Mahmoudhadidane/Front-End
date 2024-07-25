import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPersonCheckingsComponent } from './view-person-checkings.component';

describe('ViewPersonCheckingsComponent', () => {
  let component: ViewPersonCheckingsComponent;
  let fixture: ComponentFixture<ViewPersonCheckingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPersonCheckingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPersonCheckingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
