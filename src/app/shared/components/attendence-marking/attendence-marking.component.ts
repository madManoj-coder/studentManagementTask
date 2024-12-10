import { Component, OnInit } from '@angular/core';
import { AttendenceService } from '../../services/attendence.service';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-attendence-marking',
  templateUrl: './attendence-marking.component.html',
  styleUrls: ['./attendence-marking.component.scss']
})
export class AttendenceMarkingComponent {

  attendanceForm !: FormGroup;

  constructor(private fb: FormBuilder, private attendanceService: AttendenceService) { }

  ngOnInit(): void {
    this.attendanceForm = this.fb.group({
      status: [null, Validators.required] 
    });
  }

  onSubmit(): void {
    if (this.attendanceForm.valid) {
      const attendanceData = this.attendanceForm.value;
      this.attendanceService.markAttendance(attendanceData).subscribe(response => {
        console.log('Attendance marked successfully!', response);
        this.attendanceForm.reset();
      }, error => {
        console.error('Error marking attendance', error);
      });
    } else {
      console.log('Form is invalid!');
    }
  }

}
