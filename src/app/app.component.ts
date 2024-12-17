import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import { UserService } from './Service/user.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})



export class AppComponent {
  private static hasRunOnce = false; // Static flag to track execution

  constructor(private userService: UserService) {}

  title = 'Blog-website';

  ngOnInit(): void {
    if (!AppComponent.hasRunOnce) {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (isLoggedIn === 'true') {
        localStorage.clear();
        this.userService.setUserName(null);
      }
      AppComponent.hasRunOnce = true; // Mark as executed
    }
  }
}
