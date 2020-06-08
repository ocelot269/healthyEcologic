import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Utils } from "./utils";


@Injectable({
  providedIn: 'root'
})
export class CommentService {
  IP = this.utils.host;

  API_URL = `http://${this.IP}:3000/api`;

  constructor(private http: HttpClient, private utils: Utils) { }

  createComment(dates){
      return this.http.post(`${this.API_URL}/comments`, dates);
  }

  getListCommentsByIdProduct(id){
      return this.http.get(`${this.API_URL}/comments/${id}`);
  }

  deleteComment(id){
      return this.http.delete(`${this.API_URL}/comments/${id}`);
  }

}
