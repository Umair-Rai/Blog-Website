import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router'; // Add RouterModule for routing

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ServicesService } from '../Service/services.service';
import {UserService} from '../Service/user.service';
import {LoginComponent} from '../login/login.component';


@Component({
  selector: 'app-addpostinblog',
  standalone: true,
  imports: [
    RouterModule, // Add RouterModule here for routing support
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    LoginComponent,
  ],
  styleUrl: './addpostinblog.component.css',
  templateUrl: './addpostinblog.component.html',
})
export class AddpostinblogComponent {
  constructor(private services: ServicesService,private router: Router, private userService: UserService) {}
  userName: string | null = null;
  ngOnInit(): void {
    this.userService.userName$.subscribe((name) => {
      this.userName = name;
      if (this.userName === null) { this.router.navigate(['/login']);
      }
    });
  }

  post = {
    title: '',
    author:'',
    content: '',
    creator:  ''}

  isSubmitted = false;

  onSubmit(form: any): void {
    if (form.valid) {
      this.post.creator=this.userName || '';
      console.log('Post Data:', this.post);
      this.isSubmitted = true;
      this.services.senddata(this.post).subscribe(
        (data) => {
          console.log("data sent success");
        },
        (error) => {
          console.log("data sent failed");
        });{ }

      // Hide success message after 3 seconds
      setTimeout(() => {
        this.isSubmitted = false;
        form.resetForm();
        this.router.navigate(['/home']);
      }, 3000);
    }
  }
}

