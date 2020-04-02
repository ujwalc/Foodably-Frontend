import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipeFormService } from '../shared/services/recipe-form.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-create-edit-recipe',
  templateUrl: './create-edit-recipe.component.html',
  styleUrls: ['./create-edit-recipe.component.scss']
})
export class CreateEditRecipeComponent implements OnInit, OnDestroy {

  categories = ['Breakfast', 'Lunch', 'Dinner'];
  cuisines = ['Indian', 'Ukrainian', 'Italian', 'French'];
  dishTypes = ['Dessert', 'Soup', 'Curry', 'Pizza', 'Stew', 'Drinks'];

  styleGuide = {
    caretClass: 'dropdown__caret',
    selectBoxClass: 'dropdown__content',
    selectMenuClass: 'dropdown',
    optionsClass: 'dropdown__option'
  };

  recipeForm: FormGroup;
  recipeFormSub: Subscription;
  ingredients: FormArray;
  instruction: FormArray;
  formInvalid = false;

  constructor(private recipeFormService: RecipeFormService) { }

  ngOnInit(): void {
    this.recipeFormSub = this.recipeFormService.recipeForm$
      .subscribe(recipe => {
        this.recipeForm = recipe;
        this.ingredients = this.recipeForm.get('ingredients') as FormArray;
        this.instruction = this.recipeForm.get('instruction') as FormArray;
      });
  }

  onSubmit() {
    console.log('recipe saved!');
    console.log(this.recipeForm.value);
  }

  ngOnDestroy() {
    this.recipeFormSub.unsubscribe();
  }

  /* ingredients */

  addIngredient() {
    this.recipeFormService.addIngredient();
  }

  deleteIngredient(index: number) {
    this.recipeFormService.deleteIngredient(index);
  }

  /* instruction */

  addInstructionStep() {
    this.recipeFormService.addInstructionStep();
  }

  deleteInstructionStep(index: number) {
    this.recipeFormService.deleteInstructionStep(index);
  }
}
