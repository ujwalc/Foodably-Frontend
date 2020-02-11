import {Component, Input, OnInit} from '@angular/core';
import {BlogItem} from '../../shared/blog-item.model';

@Component({
  selector: 'app-blog-section-landing',
  templateUrl: './blog-section-landing.component.html',
  styleUrls: ['./blog-section-landing.component.scss']
})
export class BlogSectionLandingComponent implements OnInit {

  @Input()
  blogSection: {
    header: string,
    blogs: BlogItem[]
  };

  constructor() { }

  ngOnInit() {
  }

}
