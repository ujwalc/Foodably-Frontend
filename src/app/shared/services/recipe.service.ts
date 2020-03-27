import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map } from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) {}

  fetchRecipe(id: string) {
    return this.http
      .get('http://localhost:4000/recipe/' + id)
      .pipe(
        map(responseData => {
          const key = 'data';
          if (responseData.hasOwnProperty(key)) {
             return responseData[key];
          }
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }
}
