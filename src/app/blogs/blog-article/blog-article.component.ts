import {Component, Input, OnInit} from '@angular/core';
import {BlogArticle} from '../../shared/blog-article.model';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {

  @Input()
  blog: BlogArticle;

  constructor() { }

  ngOnInit() {
  }
}
