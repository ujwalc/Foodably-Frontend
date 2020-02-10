import { Component, Input, OnInit } from '@angular/core';
import { RecipeItem } from '../shared/recipe-item.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  @Input()
  recipeSection: {
      header: string,
      recipes: RecipeItem[]
    };

  constructor() { }

  ngOnInit() {
  }

}
