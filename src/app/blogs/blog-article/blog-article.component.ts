import {Component, Input, OnInit} from '@angular/core';
import {BlogArticle} from '../../shared/models/blog-article.model';
import {ArticleImage} from '../../shared/models/article-image.model';
import {RecipeItem} from '../../shared/models/recipe-item.model';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {

  @Input()
  blog: BlogArticle;

  date = new Date();
  image = new ArticleImage('assets/img/stock-img/alex-munsell-Yr4n8O_3UPc-unsplash.jpg', 'Aloe Vera A Wonder Herb For Skin');

  @Input()
  relatedRecipes = {
    header: 'Related recipes',
    recipes: [
      new RecipeItem('assets/img/stock-img/baiq-daling-ykThMylLsbY-unsplash.jpg', '30 min', 'Eggs en Cocotte', 'Made by Alice Norris'),
      new RecipeItem('assets/img/stock-img/martin-widenka-tkfRSPt-jdk-unsplash.jpg', '20 min', 'Petit beurre dessert', 'Made by Randall Fisher')
      ]
  };

  constructor() { }

  ngOnInit() {
  }
}
