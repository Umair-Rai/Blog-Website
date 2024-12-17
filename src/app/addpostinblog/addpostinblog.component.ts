import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Add RouterModule for routing
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ServicesService } from '../Service/services.service';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-addpostinblog',
  standalone: true,
  imports: [
    RouterModule, // Add RouterModule here for routing support
    FormsModule,
    ReactiveFormsModule,
    NgIf,
  ],
  styleUrl: './addpostinblog.component.css',
  templateUrl: './addpostinblog.component.html',
})
export class AddpostinblogComponent {
  constructor(private services: ServicesService) {}
  post = {
    id: uuid(),
    title: '',
    author:'',
    content: ''
  };

  isSubmitted = false;

  onSubmit(form: any): void {
    if (form.valid) {
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
      }, 3000);
    }
  }
}

