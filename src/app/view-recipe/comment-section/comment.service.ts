import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {CommentInterface} from './commentInterface';
import {NgForm} from '@angular/forms';


@Injectable({ providedIn: 'root' })
export class CommentService {
    commentDesc: string;
    recipeId: string;
    userId: string;
    userName: string;
    private url = 'http://localhost:8080/userComments/allComments';
    constructor(private http: HttpClient) { }

    getComments() {
      return this.http.get<CommentInterface[]>(this.url);
    }
    onComment(form: NgForm) {
      this.commentDesc = form.value.comment;
      this.recipeId = '123Biryani';
      this.userId = '1';
      this.userName = 'Sneha Jayavardhini';
      console.log(form.value);
      console.log('commentDesc' + this.commentDesc);
      const date = new Date();
      const commentData = {
        comment: this.commentDesc,
        recipeId: this.recipeId,
        userId : this.userId,
        userName : this.userName
       // commentdate: date
      };
      this.http.post<CommentInterface>(`http://localhost:8080/userComments/comment`,
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
}
