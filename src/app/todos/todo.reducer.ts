import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear, toggle, editar, borrar, toggleAll, borrarCompletados } from './todo.actions';
 
export const estadoInicial: Todo[] = [
    new Todo('Salvar el mundo'),
    new Todo('Vencer a thanos'),
    new Todo('Comprar el traje de ironman'),
    new Todo('Robar el escudo del capitan america'),
];
 
const _todoReducer = createReducer(
    estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(toggleAll, (state, { completado }) => state.map( todo => {
    
        return{
          ...todo,
          completado: completado
        }
      })

    ),
  on(borrar, (state, { id }) => state.filter( todo => todo.id !== id)),
  on(toggle, (state, { id }) => {

    return state.map( todo => {
      if(todo.id === id){
        return {
          ...todo,
          completado: !todo.completado
        }
      }else{
        return todo;
      }
    })
  }),
  on(editar, (state, { id, texto }) => {

    return state.map( todo => {
      if(todo.id === id){
        return {
          ...todo,
          texto: texto
        }
      }else{
        return todo;
      }
    })
  }),
  on(borrarCompletados, (state ) => state.filter( todos => !todos.completado)),
);
 
export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}