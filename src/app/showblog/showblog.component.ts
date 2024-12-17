import { Component ,OnInit} from '@angular/core';
import {ServicesService} from '../Service/services.service';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {UserService} from '../Service/user.service';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-showblog',
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './showblog.component.html',
  standalone: true,
  styleUrl: './showblog.component.css'
})
export class ShowblogComponent {
  constructor(private route: ActivatedRoute ,private servicess: ServicesService, private router: Router, private userService: UserService) {}
  userName: string | null = null;
  public id!: string | null;
  public blog !: any;
  ngOnInit(): void {
    this.userService.userName$.subscribe((name) => {
      this.userName = name;
    });
    this.id = this.route.snapshot.paramMap.get('id');
      this.servicess.getid(this.id).subscribe(
      (data) => {
        this.blog = data;
      },
      (err) => {
        console.log("retrieve failed");
      });{ }
  }
  deleteblog(id:any ): void {
    this.servicess.deletedata(id).subscribe((data) => {console.log("Data deleted successfully");},(error) => {console.log("Some error")});
    this.router.navigate(['/home']);
  }

}
