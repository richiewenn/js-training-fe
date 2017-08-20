import Component from "rendering-lib/src/Component";

import { fetchTodos } from '../services/TodoService';
import Todo from "../models/Todo";

interface State {
  todos: Array<Todo>
}
interface Props {

}

export default class TodoList extends Component<Props, State> {
  state = {
    todos: [{
      description: 'test',
      isDone: false
    }]
  };

  constructor() {
    super();
    fetchTodos()
      .then(todos => this.setState({todos}))
      .catch(err => console.error(err));
  }

  render() {
    return `
      <ul>
        ${this.state.todos.map((todo: Todo) => `<li>${todo.description}</li>`)}
      </ul>
    `;
  }
}