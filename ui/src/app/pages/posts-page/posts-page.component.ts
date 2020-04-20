import { Component, OnInit } from '@angular/core';
import { Post } from "../../posts/post";
import { PostService } from "../../posts/post.service";
import { Comment } from "../../comments/comment";
import { CommentService } from "../../comments/comment.service";
import {toNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent implements OnInit {
  selectedPost: Post;
  posts: Post[];
  showComments: boolean;
  showShareComments: boolean;
  prevSelectedPost: Post;
  comments: Comment[];
  sortOption: string;

  constructor(
    private postService : PostService,
    private commentService : CommentService
    ) { }

  ngOnInit() {
    this.postService.readPosts().subscribe((posts: Post[])=> {
      this.posts = posts;
      console.log(this.posts);
    });
    this.showComments = false;
    this.prevSelectedPost = null;
    this.showShareComments = false;
  }

  sortPosts(): void {
    console.log(this.sortOption);
    this.postService.readPosts().subscribe((posts: Post[])=> {
      if (this.sortOption == "Most Recent") {
        this.postService.readSortedPosts().subscribe((posts: Post[]) => {
          this.posts = posts;
        });
      }
      if (this.sortOption == "Most Likes") {
        this.posts = posts.sort((a, b) => b.LikeNo - a.LikeNo);
      }
      if (this.sortOption == "Most Comments") {
        this.posts = posts.sort((a, b) => b.CommentNo - a.CommentNo);
      }
    });
  }

  onSelect(post: Post): void {
    console.log("onselect");
    this.selectedPost = post;
    if (this.prevSelectedPost != this.selectedPost) {
      this.showComments = false;
      this.showShareComments = false;
    }
    this.prevSelectedPost = this.selectedPost;
  }

  toggleComment(post: Post): void {
    this.showComments = !this.showComments;
    console.log("toggle, showComments = " + this.showComments);

    // read comments of the selected post
    // console.log(post.PostID);
    this.commentService.readComments(post.PostID).subscribe((comments: Comment[]) => {
      this.comments = comments;
      console.log(this.comments);
    });
  }

  toggleShareComment(post: Post): void {
    this.showShareComments = !this.showShareComments;
    this.commentService.getPostID(post.PostID);
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

  sortOptions = [
    { name: "Most Recent", value: 1 },
    { name: "Most Likes", value: 2 },
    { name: "Most Comments", value: 3}
  ]
}
