import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { PostService } from "../../posts/post.service";
import { Post } from "../../posts/post";
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-share-page',
  templateUrl: './share-page.component.html',
  styleUrls: ['./share-page.component.css']
})

export class SharePageComponent implements OnInit {
  constructor(private postService : PostService) { }
  posts: Post[];

  ngOnInit() {
    this.postService.readPosts().subscribe((posts: Post[])=> {
      this.posts = posts;
      console.log(this.posts);
    })
  }

  submitForm(form: NgForm){
    this.postService.submitPost(form.value).subscribe((post: Post) =>{
      console.log("New post generated: ", post);
    });
  }
}
