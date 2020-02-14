import {BlogItem} from './blog-item.model';
import {BlogParagraph} from './blog-paragraph.model';
import {RecipeItem} from './recipe-item.model';

export class BlogArticle extends BlogItem {

  public article: [BlogParagraph];
  public relatedRecipes: [RecipeItem];

  constructor(imagePath: string,
              title: string,
              author: string,
              preview: string,
              comments: number,
              article: [BlogParagraph],
              relatedRecipes: [RecipeItem]) {

    super(imagePath, title, author, preview, comments);

    this.article = article;
    this.relatedRecipes = relatedRecipes;
  }
}
