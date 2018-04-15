import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu';

class Component extends React.Component{
  render(){
    return (
      <Menu />
      )
  };
};

ReactDOM.render(<Component />,
    document.getElementById('content'));
