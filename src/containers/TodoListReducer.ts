import Reducer from 'rendering-lib/src/Reducer'
import { Action } from 'rendering-lib/src/Actions'
import Todo from '../models/Todo';
import {FETCH_TODOS} from './Actions';

interface State {
  todos: Array<Todo>
}

export default class TodoListReducer extends Reducer<State> {
  constructor() {
    super('todoList', {todos: []});
  }

  reduce(state: any, action: Action): any {
    switch (action.type) {
      case FETCH_TODOS:
        return {
          todos: action.payload as Array<Todo>
        };
    }
  }
}