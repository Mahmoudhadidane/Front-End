import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateCheckingComponent } from './user-create-checking.component';

describe('UserCreateCheckingComponent', () => {
  let component: UserCreateCheckingComponent;
  let fixture: ComponentFixture<UserCreateCheckingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCreateCheckingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCreateCheckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
