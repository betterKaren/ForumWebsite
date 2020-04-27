import { Component, OnInit } from '@angular/core';
import { PostService } from "../../../posts/post.service";
import { NgForm} from "@angular/forms";
import { Post } from "../../../posts/post";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  posts: Post[];
  public navbarCollapsed = true;

  constructor(
    private postService: PostService
  ) {}

  ngOnInit() {
  }

  search(f: NgForm) {
    this.postService.searchPosts(f.value).subscribe((posts: Post[]) => {
      // console.log(f.value);
      this.posts = posts;
    });
  }
}
