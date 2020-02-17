import { Component, OnInit } from '@angular/core';
import { PostService } from "../../posts/post.service";
import { Post } from "../../posts/post";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-share-page',
  templateUrl: './share-page.component.html',
  styleUrls: ['./share-page.component.css']
})

export class SharePageComponent implements OnInit {
  posts: Post[];
  postForm: FormGroup;

  constructor(
    private postService : PostService,
    private formBuilder : FormBuilder
  ) {}


  ngOnInit() {
    this.postService.readPosts().subscribe((posts: Post[])=> {
      this.posts = posts;
      this.postForm = this.formBuilder.group({
        UserID: [null, Validators.required],
        UserName: '',
        Title: [null, Validators.required],
        Content: ''
      });
      console.log(this.posts);
    })
  }

  submitForm(form) {
    if (form.valid) {
      this.postService.submitPost(form.value).subscribe((post: Post) => {
        console.log("New post generated: ", post);
      });
      this.postForm.reset();
    }
  }
}
