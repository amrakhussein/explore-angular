import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../model/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getComments(postId: number): Observable<Comment[]> {
    console.log('postId: ', postId);
    const url = `${this.baseUrl}/posts/${postId}/comments`;
    console.log('comments servce:: url: ', url);
    return this.http.get<Comment[]>(url);
  }
}
