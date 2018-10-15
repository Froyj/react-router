import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import './App.css';

import Home from './Home';
import History from './History';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ul>
            <li>
              <NavLink exact to="/"> Accueil </NavLink>
            </li>
            <li>
              <NavLink to="/notre-histoire" activeClassName="selected"> Notre histoire </NavLink>
            </li>
          </ul>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/notre-histoire" component={History} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
