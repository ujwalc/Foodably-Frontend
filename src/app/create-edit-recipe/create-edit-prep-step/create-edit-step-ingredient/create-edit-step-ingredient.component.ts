import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-edit-step-ingredient',
  templateUrl: './create-edit-step-ingredient.component.html',
  styleUrls: ['./create-edit-step-ingredient.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateEditStepIngredientComponent implements OnInit {

  ingredients = ['potato', 'onion', 'rice', 'cilantro'];

  @Input() ingredientForm: FormGroup;
  @Input() index: number;
  @Output() deleteIngredient: EventEmitter<number> = new EventEmitter();

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
    this.deleteIngredient.emit(this.index);
  }
}
