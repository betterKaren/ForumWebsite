import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http : HttpClient) { }

  PHP_API_SERVER = "http://127.0.0.1:8080";

  readPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }

  submitPost(post:Post):Observable<Post> {
    return this.http.post<Post>(`${this.PHP_API_SERVER}/api/share.php`, post);
  }


}
