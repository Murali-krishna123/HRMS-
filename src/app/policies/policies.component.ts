import { Component, OnInit } from '@angular/core';

// Define an interface for a Policy
interface Policy {
  title: string;
  description: string;
  showDetails: boolean;
}

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {
  // Define the array to hold policies
  policies: Policy[] = [
    { title: 'Leave Policy', description: 'This policy describes the guidelines for taking leave.', showDetails: false },
    { title: 'Attendance Policy', description: 'This policy outlines the rules for attendance at the workplace.', showDetails: false },
    { title: 'Code of Conduct', description: 'This policy explains the expected behavior and ethical guidelines.', showDetails: false },
  ];

  // Object to hold the current policy (for both editing and adding)
  currentPolicy: Policy = { title: '', description: '', showDetails: false };

  // Flag for editing mode
  isEditing = false;

  // Index of the policy being edited
  editIndex: number | null = null;

  constructor() {}

  ngOnInit(): void {}

  // Toggle visibility of the policy details (show/hide)
  toggleDetails(index: number): void {
    this.policies[index].showDetails = !this.policies[index].showDetails;
  }

  // Initialize the modal to edit an existing policy
  editPolicy(index: number): void {
    this.isEditing = true;  // Set to editing mode
    this.editIndex = index; // Set the index of the policy to be edited
    this.currentPolicy = { ...this.policies[index] }; // Pre-populate the modal form with the existing policy
  }

  // Submit the form (either add or update the policy)
  onSubmit(): void {
    if (this.isEditing) {
      // Update the existing policy
      if (this.editIndex !== null) {
        this.policies[this.editIndex] = { ...this.currentPolicy }; // Update the policy at the given index
      }
    } else {
      // Add a new policy
      if (this.currentPolicy.title && this.currentPolicy.description) {
        this.policies.push({ ...this.currentPolicy, showDetails: false }); // Add new policy to the list
      } else {
        alert('Please fill out all fields.');
        return;
      }
    }

    // Close the modal after form submission
    this.closeModal();

    // Reset the form state after submission
    this.resetForm();
  }

  // Close the modal (using Bootstrap's Modal API)
  closeModal(): void {
    const modalElement = document.getElementById('addPolicyModal');
    if (modalElement) {
      // const modal = bootstrap.Modal.getInstance(modalElement); // Get the modal instance
      // modal.hide(); // Close the modal
    }
  }

  // Reset form and state to initial values
  resetForm(): void {
    this.currentPolicy = { title: '', description: '', showDetails: false }; // Reset form data
    this.isEditing = false;  // Set editing flag back to false
    this.editIndex = null;   // Reset the edit index
  }

  // Delete a policy from the list
  deletePolicy(index: number): void {
    if (confirm('Are you sure you want to delete this policy?')) {
      this.policies.splice(index, 1); // Remove the policy from the list
    }
  }
}

