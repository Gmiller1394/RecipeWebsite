import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RecipeRestService {

  constructor(private http: HttpClient) { }

  getRecipes(categoryId){
    return this.http.get<any>('/api/services/categories/recipes/' + categoryId).pipe(
      map(response => response)
    );
  }
}
