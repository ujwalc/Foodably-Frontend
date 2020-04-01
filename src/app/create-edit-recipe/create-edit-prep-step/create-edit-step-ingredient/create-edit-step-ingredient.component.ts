import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-edit-step-ingredient',
  templateUrl: './create-edit-step-ingredient.component.html',
  styleUrls: ['./create-edit-step-ingredient.component.scss']
})
export class CreateEditStepIngredientComponent implements OnInit {

  ingredients = ['potato', 'onion', 'rice', 'cilantro'];

  styleGuide = {
    caretClass: 'dropdown__caret',
    selectBoxClass: 'dropdown__content',
    selectMenuClass: 'dropdown',
    optionsClass: 'dropdown__option'
  };

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {

  }
}
