import { Component, OnInit } from '@angular/core';
import {Category} from "../../models/category";
import {CategoryRestService} from "../../services/category-service/category-rest.service";
import {RecipesComponent} from "../recipes/recipes.component";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public listOfCategories: Array<Category>;
  public isCategories: Boolean;

  constructor(private categoryRestService: CategoryRestService,
              private recipe: RecipesComponent) {
  }

  ngOnInit() {
    this.isCategories = true;
    this.getCategories();
  }

  public getCategories(){
    this.categoryRestService.getCategoryNames().subscribe(response => {
      this.listOfCategories = response;
    });
  }

  getRecipes(index){
    this.isCategories = false;
    this.recipe.getRecipes(this.listOfCategories[index].id);
  }

}
