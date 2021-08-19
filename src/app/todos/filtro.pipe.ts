import { filtrosValidos } from './../filtro/filtro.actions';
import { Todo } from './models/todo.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {

    switch(filtro){


      case 'completados':
        return todos.filter( todos => todos.completado);

      case 'pendientes':
        return todos.filter( todos => !todos.completado);
      
      default:
        return todos;
    }
  }

}