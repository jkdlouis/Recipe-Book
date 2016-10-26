import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

import { RecipeItemComponent } from './recipe-item.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: 'recipe-list.component.html'
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
      new Recipe('Schnitzel', 'Very tasty', 'http://restaurant-piccolo.net/wp-content/uploads/2014/12/piccolo-Wiener-Schnitzel.jpg', []),
      new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];


  @Output()recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
