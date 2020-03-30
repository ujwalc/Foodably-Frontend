import {Component, OnInit} from '@angular/core';
import {Recipe} from '../shared/models/recipe/recipe.model';

@Component({
  selector: 'app-user-recipes',
  templateUrl: './user-recipes.component.html',
  styleUrls: ['./user-recipes.component.scss']
})
export class UserRecipesComponent implements OnInit {

  recipes: Recipe[];

  constructor() {

    const recipeItem = new Recipe('',
      'assets/img/stock-img/martin-widenka-tkfRSPt-jdk-unsplash.jpg',
      'Yellow birthday cake with chocolate frosting',
      'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printin…', '', '', '', 0, true, 40, null, null, '', null, [], [], 0);

    this.recipes = [recipeItem, recipeItem, recipeItem, recipeItem];
  }

  ngOnInit(): void {
  }
}
