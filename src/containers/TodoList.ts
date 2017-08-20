import Component from "rendering-lib/src/Component";
import Store from "rendering-lib/src/Store";
import { createContainer } from "rendering-lib/src/Container";

import { fetchTodos } from './Actions';
import Todo from "../models/Todo";
import TodoListReducer from './TodoListReducer';

interface State {

}
interface Props {
  todos: Array<Todo>
}

class TodoList extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    fetchTodos();
  }

  render(): string {
    return `
      <ul>
        ${Store.state.todoList.todos.map((todo: Todo) => `<li>${todo.description}</li>`)}
      </ul>
    `;
  }
}

export default createContainer(TodoList, TodoListReducer);