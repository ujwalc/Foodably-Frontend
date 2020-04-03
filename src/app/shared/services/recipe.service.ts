import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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

  createRecipe(recipe: Recipe) {
    recipe.authorId = sessionStorage.getItem('id');
    return this.http
      .post(`${this.baseURL}recipe/`,
        JSON.stringify(recipe),
        {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      })
      .pipe(
        map((responseData) => {
          const key = 'data.id';
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
      .get(this.baseURL + 'profile/recipes/' + sessionStorage.getItem('id'))
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
