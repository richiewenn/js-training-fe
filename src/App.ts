import Vasific from 'rendering-lib/src/Vasific';
import Component from 'rendering-lib/src/Component';

import TodoList from "./containers/TodoList";

const todoList = new TodoList();

class App extends Component<any, any> {
  render(): string {
    return todoList.render();
  }
}

const app: Component<any, any> = new App();

Vasific.render(app, '#app');
