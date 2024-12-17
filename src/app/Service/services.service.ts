import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private accountUrl = 'http://localhost:3000/account'; // Adjust the URL if needed
  private apiUrl = 'http://localhost:3000/blogs';
  constructor(private http: HttpClient) {}

  // Fetch accounts from the database
  getAccounts(): Observable<any[]> {
    return this.http.get<any[]>(this.accountUrl);
  }

  // Add a new account
  addAccount(data: any): Observable<any> {
    return this.http.post<any>(this.accountUrl, data);
  }
  addPost(post: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, post);
  }
}