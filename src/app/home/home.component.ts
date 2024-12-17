import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesService } from '../Service/services.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    FooterComponent,
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true
})
export class HomeComponent {
  post = {
    title: '',
    author: '',
    content: '',
  };

  isSubmitted = false;

  constructor(private service: ServicesService) {}

  onSubmit(form: any): void {
    if (form.valid) {
      // Call the service to add the new post
      this.service.addPost(this.post).subscribe(
        (response) => {
          console.log('Post added successfully:', response);
          this.isSubmitted = true;

          // Hide success message after 3 seconds
          setTimeout(() => {
            this.isSubmitted = false;
            form.resetForm();
          }, 3000);
        },
        (error) => {
          console.error('Error adding post:', error);
        }
      );
    }
  }
}
