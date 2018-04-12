import React, { Component } from 'react';
import Details from '../details';
import Cats from '../cats';
import axios from 'axios';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import { hashHistory } from 'react-router'
import './index.scss';

class Main extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/cat/:id"
            render={(cat) => (
            <Details
              cat={cat}
            />
          )}
          />
          <Route
            exact
            path="/"
            render={() => (
            <Cats
            />
          )}
          />
        </div>
      </Router>
    );
  }
}

export default Main;
