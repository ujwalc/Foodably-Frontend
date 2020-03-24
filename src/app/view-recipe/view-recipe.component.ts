import { RecipeItem } from './../shared/models/recipe-item.model';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {Recipe} from '../shared/models/recipe.model';
import {RecipeSection} from '../shared/models/recipe-section.model';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.scss']
})
export class ViewRecipeComponent implements OnInit {

  recipe: Recipe;

  @Input()
  moreRecipeSections = [{
    header: 'More Delicious Dishes',
      recipes: [
        new RecipeItem('assets/img/stock-img/eiliv-sonas-aceron-FoHTUTU8SzE-unsplash.jpg', '40 min', 'Petit beurre dessert',  'Made by Seth Carson'),
        new RecipeItem('assets/img/stock-img/baiq-daling-ykThMylLsbY-unsplash.jpg', '30 min', 'Eggs en Cocotte', 'Made by Alice Norris'),
        new RecipeItem('assets/img/stock-img/aigars-peda-HEG9RhlLKTY-unsplash.jpg', '15 min', 'Salmon rice soup with ginger and garlic', 'Made by Eunice Bush'),
        new RecipeItem('assets/img/stock-img/martin-widenka-tkfRSPt-jdk-unsplash.jpg', '20 min', 'Petit beurre dessert', 'Made by Randall Fisher')
      ]
    }
  ];

  safeSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/mvSNjWDQCAE");

    const recipeSection = new RecipeSection('More delicious dishes', [
      new RecipeItem('assets/img/stock-img/baiq-daling-ykThMylLsbY-unsplash.jpg', '30 min', 'Eggs en Cocotte', 'Alice Norris'),
      // tslint:disable-next-line:max-line-length
      new RecipeItem('assets/img/stock-img/martin-widenka-tkfRSPt-jdk-unsplash.jpg', '20 min', 'Petit beurre dessert', 'Randall Fisher')
    ]);

    this.recipe = new Recipe('', 'Yellow birthday cake with chocolate frosting', 'Trevor Parker', 'Jan 16, 2020', recipeSection, 234);
  }

  title = 'Delicious Puertiito Buertto';
  overView = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  ingredients = ['Egg','Chicken','Soya','Tofu','cheese','Mayo','Capsicum'];

  ngOnInit() {
  }
}
