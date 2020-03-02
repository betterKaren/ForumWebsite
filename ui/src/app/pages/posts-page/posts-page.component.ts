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
    console.log("onselect");
    this.selectedPost = post;
  }

  onBlur(): void {
    this.showComments = false;
    console.log("onblur, showComments = " + this.showComments);
  }

  toggle(): void {
    this.showComments = !this.showComments;
    console.log("toggle, showComments = " + this.showComments);
  }

  like(post: Post): void {
    this.postService.upVote(post.PostID).subscribe((post:Post) => {
      console.log("Like!");
    });
  }

  unlike(post: Post): void {
    this.postService.downVote(post.PostID).subscribe((post:Post) => {
      console.log("UnLike!");
    });
  }
}
