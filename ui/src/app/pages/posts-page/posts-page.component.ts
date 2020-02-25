import { Component, OnInit } from '@angular/core';
import { Post } from "../../posts/post";
import { PostService } from "../../posts/post.service";

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent implements OnInit {
  selectedPost: Post;
  posts: Post[];
  showComments: boolean;

  constructor(
    private postService : PostService
    ) { }

  ngOnInit() {
    this.postService.readPosts().subscribe((posts: Post[])=> {
      this.posts = posts;
      console.log(this.posts);
    });
    this.showComments = false;
  }

  onSelect(post: Post): void {
    this.selectedPost = post;
  }

  toggle(): void {
    this.showComments = !this.showComments;
  }
}
