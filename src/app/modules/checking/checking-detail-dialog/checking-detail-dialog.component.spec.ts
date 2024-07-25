import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingDetailDialogComponent } from './checking-detail-dialog.component';

describe('CheckingDetailDialogComponent', () => {
  let component: CheckingDetailDialogComponent;
  let fixture: ComponentFixture<CheckingDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckingDetailDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckingDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
