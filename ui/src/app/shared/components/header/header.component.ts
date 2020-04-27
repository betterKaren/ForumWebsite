import { Component, OnInit } from '@angular/core';
import { PostService } from "../../../posts/post.service";
import { NgForm} from "@angular/forms";
import { Post } from "../../../posts/post";
import { PostsPageComponent } from "../../../pages/posts-page/posts-page.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarCollapsed = true;
  result = true;
  results: Post[];

  constructor(
    private postService: PostService
  ) {}

  ngOnInit() {
  }

  search(f: NgForm) {
    this.postService.searchPosts(f.value).subscribe((posts: Post[]) => {
      this.results = posts;
      // console.log(f.value);
      // if(this.results != null) {
      //   this.result = true;
      // }
    });
  }
}
