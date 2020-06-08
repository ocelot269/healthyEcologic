import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "../models/Product";
import { Utils } from "./utils";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  IP = this.utils.host;
  API_URL = `http://${this.IP}:3000/api`;

  constructor(private http: HttpClient, private utils: Utils) { }

  getProductList(){
    return this.http.get(`${this.API_URL}/vegetables`);
  }

  getProduct(id: string){
    return this.http.get(`${this.API_URL}/vegetables/${id}`);
  }

  addProduct(product: Product){
    return this.http.post(`${this.API_URL}/vegetables`, product);
  }

  updateProduct(id:string , updateProduct: Product){
    return this.http.put(`${this.API_URL}/vegetables/${id}`, updateProduct);
  }

  deleteProduct(id: string){
    return this.http.delete(`${this.API_URL}/vegetables/${id}`);
  }

  getProductsByProviderList(id: string){
    return this.http.get(`${this.API_URL}/users/products/${id}`);
  }
}
