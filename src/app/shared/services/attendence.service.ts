import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AttendanceRecord } from '../model/attendenceRecord';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttendenceService {

  private attendanceKey = 'attendanceRecords';
  private apiUrl = 'http://localhost:4200';

  constructor(private http: HttpClient) {}

  markAttendance(attendanceData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, attendanceData);
  }

  private attendanceRecords: any[] = [
    { studentId: '1', status: true, timestamp: '2024-12-01T09:00:00Z' },
    { studentId: '2', status: false, timestamp: '2024-12-01T09:00:00Z' },
    { studentId: '1', status: true, timestamp: '2024-12-02T09:00:00Z' }
  ];

  getAttendance(): Observable<AttendanceRecord[]> {
    const sampleData: AttendanceRecord[] = [
      { studentName: 'John Doe', status: true, timestamp: '2024-12-08T10:00:00Z' },
      { studentName: 'Jane Smith', status: false, timestamp: '2024-12-08T10:05:00Z' }
    ];
    return of(sampleData);  
  }

  getAttendanceByStudent(studentId: string): any[] {
    return this.attendanceRecords.filter(record => record.studentId === studentId);
  }

  saveAttendance(records: any[]): void {
    localStorage.setItem(this.attendanceKey, JSON.stringify(records));
  }

}
