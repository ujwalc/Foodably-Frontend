import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {
  comment:String
  
  constructor(private httpClient: HttpClient) { }
  
  ngOnInit() {
  }

  onComment(form: NgForm){
    console.log(form.value);
    const commentData={
      comment:form.value
    }
    this.httpClient.post(`http://localhost:3000/comment`, commentData).toPromise()
    .then()
    .catch(err => console.log(err));
    this.comment=form.value;
    
    form.reset();
    return this.comment
  }

}
