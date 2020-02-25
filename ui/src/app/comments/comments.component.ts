import { Component, OnInit } from '@angular/core';
import { Comment } from './comment';
import { CommentService } from "./comment.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Comment[];
  commentForm = new FormControl();

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
  }

  submitForm(form) {
    if(form.valid) {
      this.commentService.submitComment(form.value).subscribe((comment: Comment) => {
        console.log("New comment!", comment);
      });
      this.commentForm.reset();
    }
  }
}
