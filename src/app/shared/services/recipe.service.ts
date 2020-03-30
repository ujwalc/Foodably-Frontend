import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map } from 'rxjs/operators';
import {throwError} from 'rxjs';
import { plainToClass } from 'class-transformer';
import {Recipe} from '../models/recipe/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  baseURL = 'http://localhost:4000/';

  constructor(private http: HttpClient) {}

  fetchRecipe(id: string) {
    return this.http
      .get(this.baseURL + 'recipe/' + id)
      .pipe(
        map(responseData => {
          const key = 'data';
          if (responseData.hasOwnProperty(key)) {
            return plainToClass(Recipe, responseData[key]);
          }
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }

  fetchUserRecipes() {
    return this.http
      .get(this.baseURL + 'profile/recipes/' + '5e7fe19b39d9462c9c04fcd5')
      .pipe(
        map(responseData => {
          const key = 'data';
          if (responseData.hasOwnProperty(key)) {
            return plainToClass(Recipe, responseData[key]) as unknown as Array<Recipe>;
          }
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }

  deleteRecipe(id: string) {
    return this.http
      .delete(this.baseURL + 'recipe/' + id)
      .pipe(
        map(responseData => {
          return true;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }
}
