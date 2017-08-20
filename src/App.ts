import Vasific from 'rendering-lib/src/Vasific';
import Component from 'rendering-lib/src/Component';


class App extends Component {
  render() {
    return 'Hello World'
  }
}

const app: Component = new App();

Vasific.render(app, '#app');
