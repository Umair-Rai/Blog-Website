import { Component ,OnInit} from '@angular/core';
import {ServicesService} from '../Service/services.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-showblog',
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './showblog.component.html',
  standalone: true,
  styleUrl: './showblog.component.css'
})
export class ShowblogComponent {
  constructor(private route: ActivatedRoute ,private servicess: ServicesService) {}
  public id!: string | null;
  public blog !: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
      this.servicess.getid(this.id).subscribe(
      (data) => {
        this.blog = data;
      },
      (err) => {
        console.log("retrieve failed");
      });{ }
  }
}
