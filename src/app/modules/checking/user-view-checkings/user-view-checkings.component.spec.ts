import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewCheckingsComponent } from './user-view-checkings.component';

describe('UserViewCheckingsComponent', () => {
  let component: UserViewCheckingsComponent;
  let fixture: ComponentFixture<UserViewCheckingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewCheckingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewCheckingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
