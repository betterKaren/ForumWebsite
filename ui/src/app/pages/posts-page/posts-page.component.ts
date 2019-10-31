import { Component, OnInit } from '@angular/core';
import { POSTS } from '../../posts/mock-posts';
import {Post} from "../../posts/post";


@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent implements OnInit {
  posts = POSTS;
  selectedPost : Post;
  constructor() { }

  ngOnInit() {
  }

  onSelect(post: Post): void {
    this.selectedPost = post;
  }
}
