import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { TodoPageComponent } from './todo-page/todo-page.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';



@NgModule({
  declarations: [
    TodoPageComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoAddComponent,
    TodoFooterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    TodoPageComponent
  ]
})
export class TodoModule { }
