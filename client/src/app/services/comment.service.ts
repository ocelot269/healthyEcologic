import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

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
