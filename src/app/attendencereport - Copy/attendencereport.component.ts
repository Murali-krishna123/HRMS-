import { Component } from '@angular/core';
interface AttendanceRecord {
 
  date: Date;
  timeIn: string;
  timeOut: string;
  breakHours: string;
  workingHours: string;
  timeInClicked?: boolean;
  timeOutClicked?: boolean;
}
@Component({
  selector: 'app-attendencereport',
  templateUrl: './attendencereport.component.html',
  styleUrl: './attendencereport.component.css'
})
export class AttendencereportComponent {

  searchQuery: string = '';
  startDate: string = '';
  endDate: string = '';
  records: AttendanceRecord[] = [
    {
      
      date: new Date('2023-01-25'),
      timeIn: '09:46 AM',
      timeOut: '07:46 PM',
      breakHours: '0 Hr 40 Mins 56 Secs',
      workingHours: '8 Hrs 40 Mins 56 Secs',
    },
    {
     
      date: new Date('2023-01-25'),
      timeIn: '10:16 AM',
      timeOut: '07:46 PM',
      breakHours: '0 Hr 40 Mins 56 Secs',
      workingHours: '8 Hrs 40 Mins 56 Secs',
    },
    // Additional records...
  ];
  filteredRecords: AttendanceRecord[] = [];

  ngOnInit() {
    this.filteredRecords = this.records;
  }

  filterTable() {
    this.filteredRecords = this.records.filter((record) => {
      const inSearch = record.timeIn.includes(this.searchQuery) || record.timeOut.includes(this.searchQuery);
      const inDateRange =
        (!this.startDate || new Date(record.date) >= new Date(this.startDate)) &&
        (!this.endDate || new Date(record.date) <= new Date(this.endDate));
      return inSearch && inDateRange;
    });
  }

  toggleTimeInAnimation(record: AttendanceRecord) {
    record.timeInClicked = true;
    setTimeout(() => (record.timeInClicked = false), 300);
  }

  toggleTimeOutAnimation(record: AttendanceRecord) {
    record.timeOutClicked = true;
    setTimeout(() => (record.timeOutClicked = false), 300);
  }
}
