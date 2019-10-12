import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoriesComponent} from "./components/categories/categories.component";
import {RecipesComponent} from "./components/recipes/recipes.component";
import {CreateRecipeComponent} from "./components/create-recipe/create-recipe.component";

const routes: Routes = [
  { path: 'categories' , component: CategoriesComponent },
  { path: 'categories/recipes/:categories/:id', component: RecipesComponent },
  { path: 'create-recipe', component: CreateRecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
