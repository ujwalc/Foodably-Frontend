import { RecipeSection } from '../recipe-section.model';
import { PreparationStep } from './preparation-step.model';
import { Ingredient } from './ingredient.model';
import { Ranking } from '../ranking.model';
import { Type } from 'class-transformer';

export class Recipe {

  // @Type(() => RecipeSection)
  // public relatedRecipes: RecipeSection;
  @Type(() => Ranking)
  public ranking: Ranking;

  @Type(() => Ingredient)
  public ingredients: Ingredient[];

  @Type(() => PreparationStep)
  public instruction: PreparationStep[];

  get annotations(): string[] {
    return [this.type, this.cuisine, this.category];
  }

  get cookingTime(): string {
      return `${this.preparationTime} min.`;
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
              public preparationTime: number,
              ranking: Ranking,
              public author: { name: string },
              public createdAt: string,
              public relatedRecipes: RecipeSection,
              ingredients: Ingredient[],
              instruction: PreparationStep[],
              public comments: number,
              public id?: string) {

    this.ranking = ranking;
    this.ingredients = ingredients;
    this.instruction = instruction;
  }
}
