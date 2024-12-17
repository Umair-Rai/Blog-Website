import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
  url = `http://localhost:3000/blogs`;
  senddata(data: any) {
   return this.http.post<any>(this.url,data);
  }
  getdata(){
    return this.http.get(this.url);
  }
  getid(id:any)
  {
    return this.http.get(`http://localhost:3000/blogs/${id}`);
  }

}
