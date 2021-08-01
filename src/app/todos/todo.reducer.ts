import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear } from './todo.actions';
 
export const estadoInicial: Todo[] = [
    new Todo('Salvar el mundo'),
    new Todo('Vencer a thanos'),
    new Todo('Comprar el traje de ironman'),
    new Todo('Robar el escudo del capitan america'),
];
 
const _todoReducer = createReducer(
    estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
);
 
export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}