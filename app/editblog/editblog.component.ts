import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServicesService} from '../Service/services.service';
import {UserService} from '../Service/user.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-editblog',
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './editblog.component.html',
  standalone: true,
  styleUrl: './editblog.component.css'
})
export class EditblogComponent {
  userName: string | null = null;
  edit = {
    id:'',
    title: '',
    author:'',
    content: '',
    creator:  ''}
  public blog !: any;
  constructor(private route: ActivatedRoute ,private servicess: ServicesService, private router: Router, private userService: UserService) {}
  ngOnInit(): void {
    this.userService.userName$.subscribe((name) => {
      this.userName = name;
    });

    // Fetch blog data and populate the edit object
    this.servicess.getid(this.route.snapshot.paramMap.get('id')).subscribe(
      (data) => {
        this.blog = data;
        this.edit = {
          id: this.blog.id,
          title: this.blog.title,
          author: this.blog.author,
          content: this.blog.content,
          creator: this.blog.creator || '' // Default to empty string if creator is null
        };
      },
      (err) => {
        console.log("Retrieve failed", err);
      }
    );
  }




  isSubmitted = false;

  onSubmit(form: any): void {
    if (form.valid) {
      this.edit.creator=this.userName || '';
      console.log('Post Data:', this.edit);
      this.isSubmitted = true;
      this.servicess.updatedata(this.edit.id,this.edit).subscribe(
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
