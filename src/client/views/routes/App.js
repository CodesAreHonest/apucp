import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import "./App.css";

import Index from '../pages/Admin/Login';
import Confession from '../pages/Confession';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="body">
        <Switch>
          <Route exact path="/admin" component={Index}/>
          <Route exact path="/" component={Confession}/>
        </Switch>
      </div>
    );
  }
}

export default App;
