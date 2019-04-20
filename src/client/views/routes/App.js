import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import "./App.css";

import Login from '../pages/Admin/Login/Login';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="body">
        <Switch>
          <Route exact path="/admin" component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default App;
