import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCheckingsComponent } from './all-checkings.component';

describe('AllCheckingsComponent', () => {
  let component: AllCheckingsComponent;
  let fixture: ComponentFixture<AllCheckingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCheckingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCheckingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
