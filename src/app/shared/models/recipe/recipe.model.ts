import { RecipeSection } from '../recipe-section.model';
import { PreparationStep } from './preparation-step.model';
import { Ingredient } from './ingredient.model';
import {Ranking} from '../ranking.model';

export class Recipe {

  get annotations(): string[] {
    return [this.type, this.cuisine, this.category];
  }

  // TOOD: Remove comments and load with comments request
  constructor(public videoURL: string,
              public title: string,
              public description: string,
              public cuisine: string,
              public category: string,
              public type: string,
              public likes: number,
              public isVeg: boolean,
              public preparationTime: string,
              public ranking: Ranking,
              public author: string,
              public createdAt: string,
              public relatedRecipes: RecipeSection,
              public ingredients: Ingredient[],
              public instruction: PreparationStep[],
              public comments: number,
              public id?: string) {
  }
}
