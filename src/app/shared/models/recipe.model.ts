import { RecipeSection } from './recipe-section.model';

export class Recipe {

  constructor(public imagePath: string,
              public title: string,
              public author: string,
              public createDate: string,
              public relatedRecipes: RecipeSection,
              public comments: number) {
  }
}
