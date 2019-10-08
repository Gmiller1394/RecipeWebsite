import {Component, OnInit} from '@angular/core';
import {RecipeRestService} from "../../services/recipe-rest/recipe-rest.service";
import {Recipe} from "../../models/Recipe";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'recipe-page',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent  implements OnInit {

  public recipeList: Array<Recipe>;

  constructor(private recipeRestService: RecipeRestService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getRecipes(Number.parseInt(params['id']));
    });
  }

  getRecipes(categoryId) {
      this.recipeRestService.getRecipes(categoryId).subscribe(response => {
        this.recipeList = response;
      });
  }
}
