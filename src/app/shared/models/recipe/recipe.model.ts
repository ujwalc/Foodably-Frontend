import { RecipeSection } from '../recipe-section.model';
import { PreparationStep } from './preparation-step.model';
import { Ingredient } from './ingredient.model';

export class Recipe {

  get annotations(): string[] {
    return [this.type, this.cuisine, this.category];
  }

  constructor(public imagePath: string,
              public title: string,
              public description: string,
              public cuisine: string,
              public category: string,
              public type: string,
              public author: string,
              public createDate: string,
              public relatedRecipes: RecipeSection,
              public ingredients: Ingredient[],
              public instruction: PreparationStep[],
              public comments: number) {
  }
}
