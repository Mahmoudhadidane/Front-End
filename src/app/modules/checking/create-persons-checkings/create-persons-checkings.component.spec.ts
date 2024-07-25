import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePersonsCheckingsComponent } from './create-persons-checkings.component';

describe('CreatePersonsCheckingsComponent', () => {
  let component: CreatePersonsCheckingsComponent;
  let fixture: ComponentFixture<CreatePersonsCheckingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePersonsCheckingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePersonsCheckingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
