import {Component, Input, OnInit} from '@angular/core';
import {RecipeRestService} from "../../services/recipe-rest/recipe-rest.service";
import {Recipe} from "../../models/Recipe";

@Component({
  selector: 'recipe-page',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  @Input() categoryId: Number;
  public recipeList: Array<Recipe>;

  constructor(private recipeRestService: RecipeRestService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    if(this.categoryId != null) {
      this.recipeRestService.getRecipes(this.categoryId).subscribe(response => {
        this.recipeList = response;
        console.log(this.recipeList);
      });
    }
  }


}
