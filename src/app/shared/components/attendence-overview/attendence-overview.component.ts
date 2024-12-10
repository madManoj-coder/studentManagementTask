import { Component, OnInit } from '@angular/core';
import { AttendenceService } from '../../services/attendence.service';
import { UsersService } from '../../services/users.service';
import { AttendanceRecord } from '../../model/attendence';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-attendence-overview',
  templateUrl: './attendence-overview.component.html',
  styleUrls: ['./attendence-overview.component.scss']
})
export class AttendenceOverviewComponent implements OnInit {

  students: any[] = [];
  attendanceData: any[] = [];
  attendanceDataSource = new MatTableDataSource();
  startDate !: string;
  endDate !: string;
  displayedColumns: string[] = ['studentName', 'status', 'date'];

  constructor(
    private attendanceService: AttendenceService,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.attendanceService.getAttendance().subscribe(data => {
      this.attendanceData = data;
      this.attendanceDataSource.data = data;
    });
  }

  loadAttendanceData(): void {
    this.students.forEach(student => {
      const attendance = this.attendanceService.getAttendanceByStudent(student.id);
      this.attendanceData.push({ student, attendance });
    });
  }

  filterAttendance(dateRange: { startDate: string, endDate: string }): void {
    const startDate = new Date(dateRange.startDate);
    const endDate = new Date(dateRange.endDate);
    this.attendanceData.forEach(item => {
      const filteredAttendance = item.attendance.filter((record: AttendanceRecord) => {
        const recordDate = new Date(record.timestamp);
        return recordDate >= startDate && recordDate <= endDate;
      });
      item.attendance = filteredAttendance;
    });
  }

  onDateChange(): void {
    if (this.startDate && this.endDate) {
      this.filterAttendance({ startDate: this.startDate, endDate: this.endDate });
    } else {
      this.attendanceDataSource.data = this.attendanceData;
    }
  }

}
