import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
// import {Comment} from './comment.model';
import {Comment} from '../../shared/models/recipe/comment.model';
import {NgForm} from '@angular/forms';
import {catchError, map} from 'rxjs/operators';
import {plainToClass} from 'class-transformer';
import {Recipe} from '../../shared/models/recipe/recipe.model';


@Injectable({ providedIn: 'root' })
export class CommentService {
    commentDesc: string;
    recipeId: string;
    userId: string;
    userName: string;
    constructor(private http: HttpClient) { }

    getComments() {
      return this.http
        .get('http://localhost:4000/userComments/allComments')
        .pipe(
          map(responseData => {
              return plainToClass(Comment, responseData);
          }),
          catchError(errorRes => {
            return throwError(errorRes);
          })
        );
    }
    onComment(form: NgForm) {
      this.commentDesc = form.value.comment;
      this.recipeId = '123Biryani';
      this.userId = '2';
      this.userName = 'Sneha Doguparthi';
      console.log(form.value);
      console.log('commentDesc' + this.commentDesc);
      const commentData = {
        comment: this.commentDesc,
        recipeId: this.recipeId,
        userId : this.userId,
        userName : this.userName
      };
      this.http.post<Comment>(`http://localhost:4000/userComments/comment`,
        commentData
      , {
        headers: new  HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).toPromise()
      .then(data => {
        console.log(data);
      }).catch(err => console.log(err));
      form.reset();
    }
    // this method deletes the comments
    onDelete(commentId): Observable<any> {
      const data = {
        id: commentId
      };
      console.log(commentId);
      return this.http.delete(`http://localhost:4000/userComments/delete/` + commentId);
    }
}
