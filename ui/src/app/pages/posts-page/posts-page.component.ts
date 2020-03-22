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
  prevSelectedPost: Post;

  constructor(
    private postService : PostService
    ) { }

  ngOnInit() {
    this.postService.readPosts().subscribe((posts: Post[])=> {
      this.posts = posts;
      console.log(this.posts);
    });
    this.showComments = false;
    this.prevSelectedPost = null;
  }

  onSelect(post: Post): void {
    console.log("onselect");
    this.selectedPost = post;
    if (this.prevSelectedPost != this.selectedPost) {
      this.showComments = false;
    }
    this.prevSelectedPost = this.selectedPost;
  }

  toggle(): void {
    this.showComments = !this.showComments;
    console.log("toggle, showComments = " + this.showComments);
  }

  like(post: Post): void {
    this.postService.upVote(post.PostID).subscribe((post:Post) => {
      console.log("Like!");
    });
    window.location.reload();
  }

  unlike(post: Post): void {
    this.postService.downVote(post.PostID).subscribe((post:Post) => {
      console.log("UnLike!");
    });
    window.location.reload();
  }

  tooltipOptions = {
    'placement': 'bottom',
    'show-delay': '0',
    'hide-delay': '0',
    'theme': 'light'
  }
}
