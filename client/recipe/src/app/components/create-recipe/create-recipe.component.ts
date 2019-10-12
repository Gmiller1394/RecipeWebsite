import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {CategoryRestService} from "../../services/category-service/category-rest.service";
import {Category} from "../../models/category";
import {Recipe} from "../../models/Recipe";
import {Ingredient} from "../../models/ingredient";
import {Direction} from "../../models/direction";

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {

  recipeForm: FormGroup;
  private categoryList: Array<Category>;

  constructor(private formBuilder: FormBuilder,
              private categoryService: CategoryRestService) {}

  ngOnInit() {
    this.getCategories();
    this.createRecipeForm();
  }

  createRecipeForm(){
    this.recipeForm = this.formBuilder.group({
      recipeName: '',
      category: '',
      ingredientList: this.formBuilder.array([
        this.formBuilder.group({
          name:'',
          measurement: '',
          unit: ''
        })
      ]),
      directionsList: this.formBuilder.array([
        this.formBuilder.group({
          direction: '',
          step:''
        })
      ])
    });
  }

  get ingredients() {
    return this.recipeForm.get('ingredientList') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(this.formBuilder.group({
      name:'',
      measurement: '',
      unit: ''
    }));
  }

  deleteIngredient(index) {
    this.ingredients.removeAt(index);
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
