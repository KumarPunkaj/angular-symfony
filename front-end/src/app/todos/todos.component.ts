import { Component, OnInit } from '@angular/core';

import { TODOS } from './todos.mock';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos = TODOS

  constructor() { }

  ngOnInit() {
  }

}
