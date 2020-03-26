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

  get ranking(): number {
    const value = this.recipe.totalRanking / this.recipe.numberOfResponses;
    return parseFloat((value).toFixed(1));
  }

  get recipeInfo(): Array<{ image: string, text: string }> {
    const veg = this.recipe.isVeg ? [{ image: 'assets/img/veg.svg', text: 'Veg'}] : [];
    return [{image: 'assets/img/like.svg', text: this.recipe.likes.toString()}].concat(veg);
  }


  safeSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/mvSNjWDQCAE");

    // tslint:disable-next-line:max-line-length
    const description = "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.";

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

    // tslint:disable-next-line:max-line-length
    const step = new PreparationStep('Most of its text is made up from sections 1.10.32–3 of Cicero\'s De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit is the first known version.', ingredients.slice(0, 3));

    this.recipe = new Recipe('',
                                  'Yellow birthday cake with chocolate frosting',
                                        description,
                                'Italian cuisine',
                                'Desert',
                                   'Breakfast',
                                   45,
                                   true,
                          '40 min.',
                              6000,
                        1567,
                                'Trevor Parker',
                              'Jan 16, 2020',
                                        recipeSection,
                                        ingredients,
                              [step, step, step],
                                    234);
  }

  ngOnInit() {
  }
}
