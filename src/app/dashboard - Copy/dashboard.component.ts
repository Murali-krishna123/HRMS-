import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isDarkMode = false;
  isFormVisible = false;
  leaveTypes = ['Sick Leave', 'Casual Leave', 'Paid Leave', 'Unpaid Leave'];
  leaveRequest = {
    type: '',
    startDate: '',
    endDate: '',
    reason: ''
  };

  constructor(private router: Router) {}

  ngOnInit() {
    // Retrieve the current theme from local storage
    const currentTheme = localStorage.getItem('theme') || 'light-mode';
    document.body.classList.add(currentTheme);
    this.isDarkMode = currentTheme === 'dark-mode';
  }

  toggleTheme() {
    // Toggle the theme between light and dark
    this.isDarkMode = !this.isDarkMode;
    const newTheme = this.isDarkMode ? 'dark-mode' : 'light-mode';

    // Update the body class and local storage
    document.body.classList.toggle('dark-mode', this.isDarkMode);
    document.body.classList.toggle('light-mode', !this.isDarkMode);
    localStorage.setItem('theme', newTheme);
  }

  logout() {
    // Clear user session or token (if any)
    localStorage.removeItem('user'); // Or whatever you use to store user info
    // Navigate back to the login page
    this.router.navigate(['/']);
  }

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }

  submitLeaveRequest() {
    // Show confirmation alert with SweetAlert
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to submit this leave request?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, submit it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform submission logic here
        // Reset the form after submission
        this.leaveRequest = {
          type: '',
          startDate: '',
          endDate: '',
          reason: ''
        };
        this.isFormVisible = false;

        // Show success alert
        Swal.fire(
          'Submitted!',
          'Your leave request has been submitted.',
          'success'
        );
      }
    });
  }
}
