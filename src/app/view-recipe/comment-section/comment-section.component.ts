import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CommentService} from './comment.service';
import {Comment} from '../../shared/models/recipe/comment.model';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {
  comments: Comment;
  commentDesc = '';
  constructor(private commentService: CommentService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log('param id is' + params.id);
      this.commentService.recipeId = params.id;
    });
    // get comments on load of the page
    this.commentService.getComments()
      .subscribe(responseData => {
        this.comments = responseData;
        console.log(this.comments);
      }, error => {
        console.log(error);
        });
  }
  onComment(form: NgForm) {
    this.commentService.onComment(form);
    this.ngOnInit();
  }
  onDelete(id) {
    this.commentService.onDelete(id)
      .subscribe(
        responseData => {
        console.log('Delete success');
      });
    this.ngOnInit();
  }
  like(com: Comment) {
    console.log('entered') ;
    this.commentService.onUpdate(com.id, com.comment, com.like)
      .subscribe(
        responseData => {
          console.log('Update Success');
        });
    this.ngOnInit();
  }
}
