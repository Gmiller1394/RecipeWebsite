import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoriesComponent} from "./components/categories/categories.component";
import {RecipesComponent} from "./components/recipes/recipes.component";

const routes: Routes = [
  { path: 'categories' , component: CategoriesComponent },
  { path: 'categories/recipes/:categories/:id', component: RecipesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
