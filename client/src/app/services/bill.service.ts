import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class BillService {

  API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }



  createBill(dates){
      return this.http.post(`${this.API_URL}/bill`, dates);
  }

  createBillDetails(dates){
      return this.http.post(`${this.API_URL}/bill/details`, dates);
  }

  getBillById(id){
      return this.http.get(`${this.API_URL}/bill/${id}`);
  }



}
