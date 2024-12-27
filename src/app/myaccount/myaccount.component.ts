import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from 'express';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrl: './myaccount.component.css'
})
export class MyaccountComponent {
  profileForm: FormGroup;
  isEditMode = false;
  showPasswordSetting = false;
  profilePhotoUrl = 'assets/default-profile.jpg';  // Placeholder photo

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      employeeId: [{ value: '', disabled: true }, Validators.required],
      companyEmail: [{ value: '', disabled: true }, [Validators.required, Validators.email]],
      firstName: [{ value: '', disabled: true }, Validators.required],
      lastName: [{ value: '', disabled: true }, Validators.required],
      dateOfBirth: [{ value: '', disabled: true }, Validators.required],
      gender: [{ value: '', disabled: true }, Validators.required],
      contactNo: [{ value: '', disabled: true }, [Validators.required, Validators.pattern('^\\d{10}$')]],
      shiftTime: [{ value: '', disabled: true }, Validators.required],
      role: [{ value: '', disabled: true }, Validators.required],
      branchAddress: [{ value: '', disabled: true }, Validators.required],
      joinedDate: [{ value: '', disabled: true }, Validators.required],
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
    this.toggleControlState();
  }

  toggleControlState() {
    Object.keys(this.profileForm.controls).forEach(field => {
      const control = this.profileForm.get(field);
      if (control && field !== 'oldPassword' && field !== 'newPassword' && field !== 'confirmPassword') {
        this.isEditMode ? control.enable() : control.disable();
      }
    });
  }

  togglePasswordSetting() {
    this.showPasswordSetting = !this.showPasswordSetting;
  }

  uploadPhoto() {
    document.getElementById('photoUpload')?.click();
  }

  onPhotoSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profilePhotoUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  resetPassword() {
    if (this.profileForm.get('newPassword')?.value === this.profileForm.get('confirmPassword')?.value) {
      // Here, you would typically send the new password to your backend
      alert('Password successfully updated!');
      this.cancelPasswordChange();
    } else {
      alert('New passwords do not match!');
    }
  }

  cancelPasswordChange() {
    this.showPasswordSetting = false;
    this.profileForm.patchValue({ oldPassword: '', newPassword: '', confirmPassword: '' });
  }
}
