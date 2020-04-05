import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/models/recipe/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})

//Makes a request to shopping-list service and fetch shoppinglist
export class ShoppingListComponent implements OnInit, OnDestroy {

  lat = '';
  lng = '';

  shoppingListSub: Subscription;
  shoppingList: Array<Ingredient>;
  error: null;

//calls the api services
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.getShoppingList();
  }

  ngOnDestroy(): void {
    this.shoppingListSub.unsubscribe();
  }


  getShoppingList() {
    this.shoppingListSub = this.shoppingListService.fetchUserCookingList().subscribe(
      shoppingList => {
        this.shoppingList = shoppingList;
      },
      error => {
        this.error = error.message;
      }
    );
  }
}
