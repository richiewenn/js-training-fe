import Todo from '../models/Todo';
import Dispatcher from 'rendering-lib/src/Dispatcher'

export const FETCH_TODOS = 'FETCH_TODOS';

export function fetchTodos() {
  fetch('http://localhost:3000/api/todos')
    .then(response => response.json())
    .then((todos: Array<Todo>) => {
      Dispatcher.dispatch({
        type: FETCH_TODOS,
        payload: todos
      });
    });
}