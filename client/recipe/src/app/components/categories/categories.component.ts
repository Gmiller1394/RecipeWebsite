import { Component, OnInit } from '@angular/core';
import {Category} from "../../models/category";
import {CategoryRestService} from "../../services/category/category-rest.service";

@Component({
  selector: 'app-categorys',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public listOfCategories: Array<Category>;

  constructor(private categoryRestService: CategoryRestService) { }

  ngOnInit() {
    this.getCategories();
  }

  public getCategories(){
    this.categoryRestService.getCategoryNames().subscribe(response => {
      this.listOfCategories = response;
      console.log(this.listOfCategories);
    });
  }

}
