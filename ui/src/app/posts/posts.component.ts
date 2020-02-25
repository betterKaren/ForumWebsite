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
  selectedPost: Post;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.readSortedPosts().subscribe((posts: Post[])=> {
    this.posts = posts;
    console.log(this.posts);
  })
  }

  onSelect(post: Post): void {
    this.selectedPost = post;
  }
}
