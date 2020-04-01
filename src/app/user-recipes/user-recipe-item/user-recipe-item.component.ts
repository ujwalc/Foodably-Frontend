import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Recipe } from '../../shared/models/recipe/recipe.model';

@Component({
  selector: 'app-user-recipe-item',
  templateUrl: './user-recipe-item.component.html',
  styleUrls: ['./user-recipe-item.component.scss']
})
export class UserRecipeItemComponent implements OnInit {

  @Input()
  recipeItem: Recipe;

  isOverlayHidden = true;

  constructor() {}

  ngOnInit(): void {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isOverlayHidden = false;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isOverlayHidden = true;
  }
}
