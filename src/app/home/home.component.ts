import { Component,OnInit } from '@angular/core';
import {ServicesService} from '../Service/services.service';
import {NgForOf} from '@angular/common';
import { RouterModule } from '@angular/router'; // Add RouterModule for routing
@Component({
  selector: 'app-home',
  imports: [
    NgForOf,RouterModule,
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private servicess: ServicesService) {}
  items!: any;
  ngOnInit(): void {
    let item = this.servicess.getdata().subscribe(
      (data) => {
        this.items = data;
      },
      (error) => {
        console.log("retrieve failed");
      });{ }
  }

}
