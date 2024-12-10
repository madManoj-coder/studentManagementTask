import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendenceMarkingComponent } from './attendence-marking.component';

describe('AttendenceMarkingComponent', () => {
  let component: AttendenceMarkingComponent;
  let fixture: ComponentFixture<AttendenceMarkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendenceMarkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendenceMarkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
