import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient , private endpoint: EndpointService) { }
  login(admin:any) {
    return this.http.post(this.endpoint.url + 'Admin/login',admin)
  }
  loggedin() {
    return !!localStorage.getItem('token')
  }
  getUserData(){

    let token = localStorage.getItem('token');

    return JSON.parse(window.atob( token.split('.')[1] ))

  }
  getbyid(id: any){
    return this.http.get(this.endpoint.url + 'Admin/getbyid/'+ id);
  }
}