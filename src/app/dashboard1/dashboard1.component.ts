import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrl: './dashboard1.component.css'
})
export class Dashboard1Component implements OnInit {

  // time: Date = new Date();

  // insights = [
  //   { title: 'Performance', value: 65, description: 'Last Week' },
  //   { title: 'Efficiency', value: 35, description: 'This Month' },
  //   { title: 'Working Hours', value: 80, description: 'Total Hours' },
  //   { title: 'Operating Status', value: 55, description: 'Running Smoothly' }
  // ];

  // ngOnInit() {
  //   setInterval(() => {
  //     this.time = new Date();
  //   }, 1000);
  // }

  selectedDate: string | null = null;
  leaveReason: string = '';
  endDate:any;
  onDateChange() {
    // You can perform additional logic here if needed
  }

  // Method to submit leave application
  
  submitLeaveApplication() {
    console.log('Leave Date:', this.selectedDate);
    console.log('Reason:', this.leaveReason);
    // Add your leave application submission logic here
    Swal.fire({
      title: 'Leave Application Form',
      text: 'Submitted successfully!',
      icon: 'success',
      confirmButtonText: 'OK'
    })
  }

  insights = [
    { title: 'on Time Percentage', value: 85, description: 'compared to Jan' },
    { title: 'Late Percentage', value: 70, description: 'compared to Feb' },
    { title: 'Number of Leaves', value: 95, description: '8 Hours' },
    { title: 'Number of Absents', value: 78, description: 'per Month' }
  ];
  time = new Date();
  interval: any;
  isRunning = false;
  elapsedSeconds = 0;
  hours = '00';
  minutes = '00';
  seconds = '00';

  ngOnInit() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  startTimer() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.interval = setInterval(() => {
        this.elapsedSeconds++;
        this.updateTime();
        if (this.elapsedSeconds >= 8 * 3600) {
          this.stopTimer();
        }
      }, 1000);
    }
  }

  stopTimer() {
    clearInterval(this.interval);
    this.isRunning = false;
  }

  updateTime() {
    const totalHours = Math.floor(this.elapsedSeconds / 3600);
    const totalMinutes = Math.floor((this.elapsedSeconds % 3600) / 60);
    const totalSeconds = this.elapsedSeconds % 60;

    this.hours = this.padTime(totalHours);
    this.minutes = this.padTime(totalMinutes);
    this.seconds = this.padTime(totalSeconds);
  }

  padTime(value: number) {
    return value < 10 ? '0' + value : value.toString();
  }
}
