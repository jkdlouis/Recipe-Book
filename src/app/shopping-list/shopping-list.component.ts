import { Component, OnInit } from '@angular/core';

import { ShoppingListAddComponent } from "./shopping-list-add.component";

import {ShoppingListService} from './shopping-list.service';

import {Ingredient} from "../shared/ingredient";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'

})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
    this.items = this.sls.getItems();
  }

}
