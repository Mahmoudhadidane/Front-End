import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCollectiveCheckingsComponent } from './view-collective-checkings.component';

describe('ViewCollectiveCheckingsComponent', () => {
  let component: ViewCollectiveCheckingsComponent;
  let fixture: ComponentFixture<ViewCollectiveCheckingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCollectiveCheckingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCollectiveCheckingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
