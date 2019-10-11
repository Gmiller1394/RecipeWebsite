import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {CategoryRestService} from "../../services/category-service/category-rest.service";
import {Category} from "../../models/category";

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {

  private recipeForm;
  private categoryList: Array<Category>;

  constructor(private formBuilder: FormBuilder,
              private categoryService: CategoryRestService) {
    this.recipeForm = this.formBuilder.group({
      recipeName: '',
      category: '',

    });
  }

  ngOnInit() {
    this.getCategories();
  }

  public getCategories(){
    this.categoryService.getCategoryNames().subscribe(response => {
      this.categoryList = response;
    });
  }

  onSubmit(recipeForm) {
    console.log(recipeForm);
    this.recipeForm.reset();
  }

}
