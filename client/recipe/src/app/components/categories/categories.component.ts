import {Component, OnInit, Output} from '@angular/core';
import {Category} from "../../models/category";
import {CategoryRestService} from "../../services/category-service/category-rest.service";
import {RecipesComponent} from "../recipes/recipes.component";
import {RecipeRestService} from "../../services/recipe-rest/recipe-rest.service";
import {Recipe} from "../../models/Recipe";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public listOfCategories: Array<Category>;
  public isCategories: Boolean;
  public categoryId: Number;

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
    this.categoryId = this.listOfCategories[index].id;
    this.recipe.ngOnInit();
    this.isCategories = false;

  }

}
