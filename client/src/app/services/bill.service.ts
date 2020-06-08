import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Utils } from "./utils";


@Injectable({
  providedIn: 'root'
})
export class BillService {
  IP = this.utils.host;
  API_URL = `http://${this.IP}:3000/api`;

  constructor(private http: HttpClient, private utils: Utils) { }



  createBill(dates){
      return this.http.post(`${this.API_URL}/bill`, dates);
  }

  createBillDetails(dates){
      return this.http.post(`${this.API_URL}/bill/details`, dates);
  }

  getBillById(id){
      return this.http.get(`${this.API_URL}/bill/${id}`);
  }

  getHistoyShoppingByIdUser(id){
      return this.http.get(`${this.API_URL}/bill/history/${id}`);
  }



}
