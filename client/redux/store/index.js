import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Menu from '../../components/Menu';
import reducer from '../reducers';

const store = createStore(
  reducer
);
function listener() {
  console.log(store.getState(), 'store state');
}

store.subscribe(listener);

class Component extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <Menu />
      </Provider>
      )
  };
};

ReactDOM.render(<Component />,
    document.getElementById('content'));
