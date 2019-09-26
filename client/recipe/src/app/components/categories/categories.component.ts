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

  constructor(private categoryRestService: CategoryRestService) { }

  ngOnInit() {
    this.getCategories();
  }

  public getCategories(){
    this.categoryRestService.getCategoryNames().subscribe(response => {
      this.listOfCategories = response;
    });
  }

  getRecipes(index){
    console.log(this.listOfCategories[index].id);
  }

}
