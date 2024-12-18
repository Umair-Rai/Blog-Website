import { Component , OnInit } from '@angular/core';
import {ServicesService} from '../Service/services.service';
import {NgForOf, NgIf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {UserService} from '../Service/user.service';

@Component({
  selector: 'app-myblog',
  imports: [
    NgForOf,
    RouterLink,
    NgIf
  ],
  templateUrl: './myblog.component.html',
  standalone: true,
  styleUrl: './myblog.component.css'
})
export class MyblogComponent {
  constructor(private servicess: ServicesService, private userService: UserService) {}
  userName: string | null = null;


  items!: any;
  ngOnInit(): void {
    this.userService.userName$.subscribe((name) => {
      this.userName = name;
    });
    let item = this.servicess.getdata().subscribe(
      (data) => {
        this.items = data;
      },
      (error) => {
        console.log("retrieve failed");
      });{ }
  }

}

