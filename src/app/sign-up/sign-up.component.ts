import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [
    FormsModule
  ],
  templateUrl: './sign-up.component.html',
  standalone: true,
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  onSignUp() {
    if (this.password === this.confirmPassword) {
      // Mock sign-up logic
      const user = { name: this.name, email: this.email, password: this.password };
      console.log('User registered:', user);

      // Save user data (for demonstration purposes; use a backend in production)
      localStorage.setItem('user', JSON.stringify(user));
      alert('Sign-Up Successful! You can now log in.');

      // Redirect to the login page
      this.router.navigate(['/login']);
    } else {
      alert('Passwords do not match.');
    }
  }
}
