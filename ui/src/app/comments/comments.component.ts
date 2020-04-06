import { Component, OnInit } from '@angular/core';
import { Comment } from './comment';
import { CommentService } from "./comment.service";
import { FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Comment[];
  commentForm: FormGroup;
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentForm = new FormGroup({
      UserID: new FormControl(),
      UserName: new FormControl(),
      CommentContent: new FormControl()
    });
  }

  submitComment(form) {
    if(form.valid) {
      this.commentService.SubmitComment(form.value).subscribe((comment: Comment) => {
        console.log(comment);
      });
      // this.commentForm.reset();
      window.location.reload();
    }
  }
}
