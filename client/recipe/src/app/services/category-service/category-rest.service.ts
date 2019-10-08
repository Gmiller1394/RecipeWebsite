import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CategoryRestService {

  constructor(private http: HttpClient) { }

  getCategoryNames(){
    return this.http.get<any>('/api/services/categories').pipe(
      map(response => response)
    );
  }
}
