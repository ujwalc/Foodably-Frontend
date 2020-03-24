import { RecipeItem } from './../shared/models/recipe-item.model';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {Recipe} from '../shared/models/recipe/recipe.model';
import {RecipeSection} from '../shared/models/recipe-section.model';
import {Ingredient} from '../shared/models/recipe/ingredient.model';
import {PreparationStep} from '../shared/models/recipe/preparation-step.model';

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

    const ingredients = [new Ingredient('honey', 50, 'g'),
                         new Ingredient('olive oil', 25, 'ml'),
                         new Ingredient('lime', 4, 'it.'),
                         new Ingredient('mint', 10, 'g'),
                         new Ingredient('potato', 500, 'g')];

    const step = new PreparationStep('Most of its text is made up from sections 1.10.32–3 of Cicero\'s De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit is the first known version.', ingredients);

    this.recipe = new Recipe('', 'Yellow birthday cake with chocolate frosting', 'Trevor Parker', 'Jan 16, 2020', recipeSection, ingredients, [step, step, step], 234);
  }

  title = 'Delicious Puertiito Buertto';

  ingredients = ['Egg','Chicken','Soya','Tofu','cheese','Mayo','Capsicum'];

  ngOnInit() {
  }
}
