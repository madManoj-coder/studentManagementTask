import { Component, OnInit } from '@angular/core';
import { AttendenceService } from '../../services/attendence.service';
import { AttendanceRecord } from '../../model/attendenceRecord';

@Component({
  selector: 'app-attendence-list',
  templateUrl: './attendence-list.component.html',
  styleUrls: ['./attendence-list.component.scss']
})
export class AttendenceListComponent implements OnInit {

  attendanceRecords: any[] = [];
  displayedColumns: string[] = ['studentName', 'status', 'date'];

  constructor(private attendanceService: AttendenceService) {}

  ngOnInit(): void {
    // this.attendanceRecords = this.attendanceService.getAttendance();
    this.attendanceService.getAttendance().subscribe((data : AttendanceRecord[]) => {
      this.attendanceRecords = data;
    });
  }

}
