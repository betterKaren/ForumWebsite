import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http : HttpClient) { }

  // submitPost(post) {
  //   return this.http.post(`${this.url}addData.php`, JSON.stringify(post));
  // }

  readPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.PHP_API_SERVER}/read.php`);
  }

  PHP_API_SERVER = "http://127.0.0.1:8000";
}
