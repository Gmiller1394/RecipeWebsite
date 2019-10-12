import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatSelectModule, MatSortModule, MatTableModule,
  MatToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import {HttpClientModule} from "@angular/common/http";
import { RecipesComponent } from './components/recipes/recipes.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    RecipesComponent,
    CreateRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [
    RecipesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
