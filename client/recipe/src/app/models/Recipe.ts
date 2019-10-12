import {Ingredient} from "./ingredient";

export class Recipe {
  id: Number;
  recipeName: String;
  ingedientListId: Number;
  date: Date;
  firstName: String;
  lastName: String;
  directionListId: Number;
  cookTime: Number;
  ingredientList: Ingredient[];
}
