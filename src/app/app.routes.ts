import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {AddpostinblogComponent} from './addpostinblog/addpostinblog.component';
import {ShowblogComponent} from './showblog/showblog.component';
import {EditblogComponent} from './editblog/editblog.component';
import {MyblogComponent} from './myblog/myblog.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
  { path:'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  {path:'sign-up', component: SignUpComponent },
  {path:'addpostinblog', component: AddpostinblogComponent },
  {path:'blogs/:id', component: ShowblogComponent },
  {path:'editblog/:id', component: EditblogComponent },
  {path:'myblog', component: MyblogComponent },
];
