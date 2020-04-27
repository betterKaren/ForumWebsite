import { Injectable } from '@angular/core';
import { Comment } from './comment';
import { Observable } from "rxjs";
import { HttpClient, HttpEvent } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  postid: string;
  constructor(private http : HttpClient) { }

  PHP_API_SERVER = "http://localhost:8080";
  readComments(PostID): Observable<Comment[]> {
    // console.log(PostID);
    return this.http.get<Comment[]>(`${this.PHP_API_SERVER}/api/readComment.php?PostID=` + PostID);
  }

  SubmitComment(comment:Comment):Observable<Comment> {
    comment.PostID = this.postid;
    console.log("in comment service now!");
    console.log(comment);
    return this.http.post<Comment>(`${this.PHP_API_SERVER}/api/comment.php`, comment);
  }

  getPostID(PostID: string): void {
    this.postid = PostID;
    console.log("getPostID called in comment service", PostID);
  }
}
