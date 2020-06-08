import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "../models/Product";
import { Utils } from "./utils";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  IP = this.utils.host;
  API_URL = `http://${this.IP}:3000/api`;

  constructor(private http: HttpClient, private utils: Utils) { }

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
