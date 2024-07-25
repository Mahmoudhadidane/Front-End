import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCollectiveCheckingsComponent } from './create-collective-checkings.component';

describe('CreateCollectiveCheckingsComponent', () => {
  let component: CreateCollectiveCheckingsComponent;
  let fixture: ComponentFixture<CreateCollectiveCheckingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCollectiveCheckingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCollectiveCheckingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
