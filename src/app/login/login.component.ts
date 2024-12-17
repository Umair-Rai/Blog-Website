import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../Service/services.service';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    FormsModule,
    NgIf
  ],
  standalone: true
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';  // Error message for invalid login

  constructor(private router: Router, private service: ServicesService) {}

  onLogin() {
    this.service.getAccounts().subscribe(
      (accounts) => {
        // Find account by email and check password
        const user = accounts.find(
          (account) => account.email === this.email && account.password === this.password
        );

        if (user) {
          // If the user exists and credentials match, log them in
          localStorage.setItem('isLoggedIn', 'true');
          alert('Congratulations! You have logged in successfully!');
          this.router.navigate(['/']); // Redirect to home page after login
        } else {
          // If credentials are invalid
          this.errorMessage = 'Invalid email or password!';
        }
      },
      (error) => {
        this.errorMessage = 'Error while fetching accounts!';
      }
    );
  }
}
