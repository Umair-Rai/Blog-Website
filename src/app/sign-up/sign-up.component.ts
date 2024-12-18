import { Component } from '@angular/core';
import { ServicesService } from '../Service/services.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

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
  errorMessage = '';

  constructor(private service: ServicesService) {}

  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  isValidUsername(username: string): boolean {
    const usernameRegex = /^[A-Za-z]{3,16}$/;
    return usernameRegex.test(username);
  }
  isValidPassword(password: string): boolean {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  }

  onSignUp() {
    if (
      !this.user.Name ||
      !this.user.password ||
      !this.user.email
    ) {
      this.errorMessage = 'Fill the Whole Form';
      return;
    }

    if (!this.isValidUsername(this.user.Name)) {
      this.errorMessage = 'Username must be between 3 and 16 characters and only Alphabets.';
      return;
    }

    if (!this.isValidEmail(this.user.email)) {
      this.errorMessage = 'Invalid email format!';
      return;
    }

    if (!this.isValidPassword(this.user.password)) {
      this.errorMessage =
        'Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, and one number.';
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

            this.service.addAccount(this.user).subscribe({
              next: () => {
                alert('Sign-Up Successful!');
                this.user = { email: '', Name: '', password: '' }; // Reset the form
                this.errorMessage = '';
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
