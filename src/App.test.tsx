import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import middleware from './middleware';
import App from './components/App';

const store = createStore(reducer, middleware);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,  
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
