import {Component, Input, OnInit} from '@angular/core';
import {BlogItem} from '../../shared/blog-item.model';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.scss']
})
export class BlogSectionComponent implements OnInit {

  @Input()
  blogSection: {
    header: string,
    blogs: BlogItem[]
  };

  constructor() { }

  ngOnInit() {
  }

}
