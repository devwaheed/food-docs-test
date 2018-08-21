import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { People } from './people/model/people.model';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseURL = 'http://dev.api.fooddocs.ee';   

  constructor(private http: HttpClient) { }


  peopleList(){
    const url = `${this.baseURL}/testtask`;

    return this.http.get<Array<People>>(url);
  }
}
