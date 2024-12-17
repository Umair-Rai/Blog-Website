import { Component, OnInit } from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { UserService } from '../Service/user.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NgIf
  ],
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userName: string | null = null;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.userName$.subscribe((name) => {
      this.userName = name;
    });
  }

  onLogout() {
    this.userService.setUserName(null);
    this.router.navigate(['/login']);
  }
}
