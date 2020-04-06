import { Component, OnInit } from '@angular/core';
import { PostService } from "../../posts/post.service";
import { Post } from "../../posts/post";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-share-page',
  templateUrl: './share-page.component.html',
  styleUrls: ['./share-page.component.css']
})

export class SharePageComponent implements OnInit {
  posts: Post[];
  postForm: FormGroup;

  constructor(
    private postService : PostService
  ) {}

  // ngOnInit() {
  //   this.postService.readPosts().subscribe((posts: Post[])=> {
  //     this.posts = posts;
  //     this.postForm = this.formBuilder.group({
  //       UserID: [null, Validators.required],
  //       UserName: '',
  //       Title: [null, Validators.required],
  //       Content: ''
  //     });
  //     console.log(this.posts);
  //   })
  // }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      UserID: new FormControl(),
      UserName: new FormControl(),
      Title: new FormControl(),
      Details: new FormControl()
    });
  }

  submitForm(form) {
    console.log(form);

    if (form.valid) {
      this.postService.submitPost(form.value).subscribe((post: Post) => {
        console.log("New post generated: ", post);
      });
      // this.postForm.reset();
    }
  }
}
