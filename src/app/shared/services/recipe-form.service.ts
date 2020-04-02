import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { RecipeForm } from '../../create-edit-recipe/models/recipe-form.model';
import { IngredientForm } from '../../create-edit-recipe/create-edit-ingredient/models/ingredient-form.model';
import { Ingredient } from '../models/recipe/ingredient.model';
import { Recipe } from '../models/recipe/recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeFormService {
  private recipeForm: BehaviorSubject<FormGroup | undefined> = new BehaviorSubject(
    this.fb.group(new RecipeForm(
    new Recipe('', '', '', '', '', '', '', false, 1, [], [])
  )));
  recipeForm$: Observable<FormGroup> = this.recipeForm.asObservable();

  constructor(private fb: FormBuilder) {}

  addIngredient() {
    const currentRecipe = this.recipeForm.getValue();
    const currentIngredients = currentRecipe.get('ingredients') as FormArray;

    currentIngredients.push(
      this.fb.group(
        new IngredientForm(new Ingredient('', 1, 'kg'))
      )
    );

    this.recipeForm.next(currentRecipe);
  }

  deleteIngredient(i: number) {
    const currentRecipe = this.recipeForm.getValue();
    const currentIngredients = currentRecipe.get('ingredients') as FormArray;

    currentIngredients.removeAt(i);

    this.recipeForm.next(currentRecipe);
  }
}
