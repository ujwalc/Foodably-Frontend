import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import {CommentService} from './comment.service';
import {CommentInterface} from './commentInterface';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {
  public comments = [] ;
  commentDesc = '';
  date = new Date();
  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.commentService.getComments()
      .subscribe(responseData => {
        this.comments = responseData;
      }, error => {
        console.log(error);
        });
  }
  onComment(form: NgForm) {
    this.commentService.onComment(form);
    this.ngOnInit();
  }
}
