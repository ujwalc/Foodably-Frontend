import { RecipeItem } from './../shared/models/recipe-item.model';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {Recipe} from '../shared/models/recipe/recipe.model';
import {RecipeSection} from '../shared/models/recipe-section.model';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../shared/services/recipe.service';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.scss']
})
export class ViewRecipeComponent implements OnInit {

  recipe: Recipe;
  error = null;

  get recipeInfo(): Array<{ image: string, text: string }> {
    const veg = this.recipe.isVeg ? [{ image: 'assets/img/veg.svg', text: 'Veg'}] : [];
    const like = this.recipe.likes > 0 ? [{image: 'assets/img/like.svg', text: this.recipe.likes.toString()}] : [];
    return like.concat(veg);
  }

  safeSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private http: HttpClient, private recipeService: RecipeService) {
  }

  ngOnInit() {
    // Send Http request
    this.recipeService.fetchRecipe('5e7d933180e20638e4a4c02e').subscribe(
      recipe => {
        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(recipe.videoURL);
        this.recipe = recipe;

        const recipeSection = new RecipeSection('More delicious dishes', [
          new RecipeItem('assets/img/stock-img/baiq-daling-ykThMylLsbY-unsplash.jpg', '30 min', 'Eggs en Cocotte', 'Alice Norris'),
          // tslint:disable-next-line:max-line-length
          new RecipeItem('assets/img/stock-img/martin-widenka-tkfRSPt-jdk-unsplash.jpg', '20 min', 'Petit beurre dessert', 'Randall Fisher')
        ]);

        this.recipe.relatedRecipes = recipeSection;
        this.recipe.comments = 234;
      },
      error => {
        this.error = error.message;
      }
    );
  }
}
