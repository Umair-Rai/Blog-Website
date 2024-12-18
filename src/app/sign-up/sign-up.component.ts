import { Component } from '@angular/core';
import { ServicesService } from '../Service/services.service';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ]
})
export class SignUpComponent {
  user = { email: '', Name: '', password: '' }; // Form data model
  errorMessage = ''; // Error message for UI feedback

  constructor(private service: ServicesService) {}

  onSignUp() {
    if(this.user.Name == "" || this.user.password == "" || this.user.email == "" || this.user.password == "")
    {
      this.errorMessage = "Fill the Whole Form";
      return;
    }
    // Fetch accounts from the database
    this.service.getAccounts().subscribe({
      next: (accounts: any[]) => {
        // Ensure accounts is an array and check for the email
        if (Array.isArray(accounts)) {
          const emailExists = accounts.some(
            (account) => account.email.toLowerCase() === this.user.email.toLowerCase()
          );

          if (emailExists) {
            // Email exists in the database
            this.errorMessage = 'Email is already in use!';
          } else {
            // Add the new account if email is unique
            this.service.addAccount(this.user).subscribe({
              next: () => {
                alert('Sign-Up Successful!');
                this.user = { email: '', Name: '', password: '' }; // Reset the form
                this.errorMessage = ''; // Clear any previous errors
              },
              error: () => {
                this.errorMessage = 'Sign-Up Failed! Please try again.';
              },
            });
          }
        } else {
          this.errorMessage = 'Invalid response format from the server.';
        }
      },
      error: () => {
        this.errorMessage = 'Error connecting to the server!';
      },
    });
  }
}
