import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
// import {Comment} from './comment.model';
import {Comment} from '../../shared/models/recipe/comment.model';
import {NgForm} from '@angular/forms';
import {catchError, map} from 'rxjs/operators';
import {plainToClass} from 'class-transformer';
import {AuthService} from '../../shared/auth.service';

@Injectable({ providedIn: 'root' })
export class CommentService {
    commentDesc: string;
    recipeId: string;
    userId: string;
    user: string;
    id: string;
    // comment: string;
    constructor(private http: HttpClient, private authService: AuthService) {
    }
    getComments() {
      return this.http
        .get('http://localhost:4000/userComments/allComments/' + this.recipeId)
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
      this.userId = this.authService.userId;
      console.log(form.value);
      console.log('commentDesc' + this.commentDesc);
      const commentData = {
        comment: this.commentDesc,
        recipeId: this.recipeId,
        userId : this.userId,
        like: 0
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
    // this method deletes the comment
    onDelete(commentId): Observable<any> {
      return this.http.delete(`http://localhost:4000/userComments/delete/` + commentId);
    }
    onUpdate(updateid, updatecomment, likecount) {
      const data = {
        id: updateid,
        comment: updatecomment,
        like: likecount + 1
      };
      console.log(data);
      return this.http.put('http://localhost:4000/userComments/update', data );
    }
}
