import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-edit-ingredient',
  templateUrl: './create-edit-ingredient.component.html',
  styleUrls: ['./create-edit-ingredient.component.scss']
})
export class CreateEditIngredientComponent implements OnInit {

  @Input()
  isLast = true;

  units = ['kg', 't. sp.', 'g'];

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
