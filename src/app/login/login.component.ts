import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { ServicesService } from '../Service/services.service';
import { UserService } from '../Service/user.service';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    FormsModule,
    NgIf,
    RouterLink
  ],
  standalone: true
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private router: Router,
    private service: ServicesService,
    private userService: UserService // Inject UserService
  ) {}

  onLogin() {
    this.service.getAccounts().subscribe(
      (accounts) => {
        const user = accounts.find(
          (account) => account.email === this.email && account.password === this.password
        );

        if (user) {
          this.userService.setUserName(user.Name); // Set user name in service
          alert('Congratulations! You have logged in successfully!');
          this.router.navigate(['/']);
        } else {
          this.errorMessage = 'Invalid email or password!';
        }
      },
      (error) => {
        this.errorMessage = 'Error while fetching accounts!';
      }
    );
  }
}
