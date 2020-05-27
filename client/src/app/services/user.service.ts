import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "../models/Product";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getUsersList(){
    return this.http.get(`${this.API_URL}/users`);
  }

  getUser(id: string){
     return this.http.get(`${this.API_URL}/users/${id}`);
  }

  addUser(user: any){
     return this.http.post(`${this.API_URL}/users`, user);
  }

  validationUser(dates: any){
    return this.http.post(`${this.API_URL}/users/login`, dates);
  }

  updateUser(id:string , dates: any){
    return this.http.put(`${this.API_URL}/users/${id}`, dates);
  }
}
