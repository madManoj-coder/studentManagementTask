import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendenceOverviewComponent } from './attendence-overview.component';

describe('AttendenceOverviewComponent', () => {
  let component: AttendenceOverviewComponent;
  let fixture: ComponentFixture<AttendenceOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendenceOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendenceOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
