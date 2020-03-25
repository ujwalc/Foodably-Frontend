import { Ingredient } from './ingredient.model';

export class PreparationStep {

  constructor(public description: string,
              public ingredients: Ingredient[]) {
  }

  describeIngredients() {
    return this.ingredients.map(i => i.describe()).join(' | ');
  }
}
