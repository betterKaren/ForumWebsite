import { Injectable } from '@angular/core';
import { Comment } from './comment';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private http : HttpClient) { }

  PHP_API_SERVER = "http://127.0.0.1:8080";
  // readSortedPosts(): Observable<Post[]> {
  //   return this.http.get<Post[]>(`${this.PHP_API_SERVER}/api/sortedRead.php`);
  // }
  //
  //
  readComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.PHP_API_SERVER}/api/readComment.php`);
  }

  submitComment(comment:Comment):Observable<Comment> {
    return this.http.post<Comment>(`${this.PHP_API_SERVER}/api/comment.php`, comment);
  }
}
