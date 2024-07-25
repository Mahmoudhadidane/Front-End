import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPersonsCheckingsComponent } from './view-persons-checkings.component';

describe('ViewPersonsCheckingsComponent', () => {
  let component: ViewPersonsCheckingsComponent;
  let fixture: ComponentFixture<ViewPersonsCheckingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPersonsCheckingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPersonsCheckingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
