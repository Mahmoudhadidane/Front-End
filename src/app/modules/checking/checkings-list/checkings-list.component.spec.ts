import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingsListComponent } from './checkings-list.component';

describe('CheckingsListComponent', () => {
  let component: CheckingsListComponent;
  let fixture: ComponentFixture<CheckingsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckingsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
