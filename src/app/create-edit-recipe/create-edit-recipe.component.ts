import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-edit-recipe',
  templateUrl: './create-edit-recipe.component.html',
  styleUrls: ['./create-edit-recipe.component.scss']
})
export class CreateEditRecipeComponent implements OnInit {

  categories = ['Breakfast', 'Lunch', 'Dinner'];
  cuisines = ['Indian', 'Ukrainian', 'Italian', 'French'];
  dishTypes = ['Dessert', 'Soup', 'Curry', 'Pizza', 'Stew', 'Drinks'];

  styleGuide = {
    caretClass: 'dropdown__caret',
    selectBoxClass: 'dropdown__content',
    selectMenuClass: 'dropdown',
    optionsClass: 'dropdown__option'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
