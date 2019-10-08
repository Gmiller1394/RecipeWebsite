import {Component, OnInit} from '@angular/core';
import {RecipeRestService} from "../../services/recipe-rest/recipe-rest.service";
import {Recipe} from "../../models/Recipe";
import {ActivatedRoute} from "@angular/router";
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'recipe-page',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent  implements OnInit {

  public recipeList: Array<Recipe>;
  public displayedColumns: string[] = ['name', 'author', 'time'];
  public dataSource: any;

  constructor(private recipeRestService: RecipeRestService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getRecipes(Number.parseInt(params['id']));
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getRecipes(categoryId) {
      this.recipeRestService.getRecipes(categoryId).subscribe(response => {
        this.recipeList = response;
        this.dataSource = new MatTableDataSource(this.recipeList);
      });
  }
}
