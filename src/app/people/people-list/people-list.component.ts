import { People } from './../model/people.model';
import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';

@Component({
  selector: 'fd-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people:  Array<People> = [];

  constructor(private httpService: HttpService) { }


  ngOnInit() {
    this.loadPeopleList();
  }


  loadPeopleList(){
    this.httpService.peopleList().subscribe(
      people => {
        this.people = people
      },
      error => {
        alert('Error: While loading data from server');
      }
    )
  }

  removeFromList(id){
    this.people = this.people.filter(p => p.id !== id);
  }

}
