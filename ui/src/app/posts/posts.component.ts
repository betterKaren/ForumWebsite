import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { POSTS } from './mock-posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = POSTS;
  selectedPost : Post;
  constructor() { }

  ngOnInit() {
  }

  onSelect(post: Post): void {
    this.selectedPost = post;
  }
}
