import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { PostService } from "./post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  selectedPost : Post;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  onSelect(post: Post): void {
    this.selectedPost = post;
  }

  getPosts(): void {
    this.postService.readPosts().subscribe(posts => this.posts = posts);
  }
}
