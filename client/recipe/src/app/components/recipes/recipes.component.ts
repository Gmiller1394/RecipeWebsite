import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'recipe-page',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getRecipes(categoryId){
    //call recipes from db
  }

}
