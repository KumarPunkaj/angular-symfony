import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { TodosComponent } from './todos/todos.component';

const routes : Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'todos', component: TodosComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }