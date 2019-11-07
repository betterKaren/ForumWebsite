import { Injectable } from '@angular/core';
import { Post } from './post';
import { POSTS } from './mock-posts';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts(): Observable<Post[]> {
    return of (POSTS);
  }
}
