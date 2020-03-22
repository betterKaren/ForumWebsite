import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http : HttpClient) { }

  PHP_API_SERVER = "http://localhost:8080";
  readSortedPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.PHP_API_SERVER}/api/sortedRead.php`);
  }

  readPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }

  submitPost(post:Post):Observable<Post> {
    return this.http.post<Post>(`${this.PHP_API_SERVER}/api/share.php`, post);
  }

  upVote(string):Observable<Post> {
    return this.http.post<Post>(`${this.PHP_API_SERVER}/api/upvote.php`, string);
  }

  downVote(string):Observable<Post> {
    return this.http.post<Post>(`${this.PHP_API_SERVER}/api/downvote.php`, string);
  }
}


