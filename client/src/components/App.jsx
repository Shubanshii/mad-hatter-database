import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile'
import Game from './pages/Game'
import api from '../api';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }



  handleLogoutClick(e) {
    api.logout()
  }

  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <h1 className="App-title">Mad HATter</h1>
          {/*<NavLink to="/" exact>Home</NavLink>*/}
          {console.log('logggingthisdfosdif', api.isLoggedIn())}
          {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {api.isLoggedIn() && <NavLink to="/profile">Profile</NavLink>}
          {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link>}
        </header>
        <Switch>
          {/*<Route path="/" exact component={Home} />*/}
          <Route path="/" exact component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/game/:id" component={Game} />

          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    );
  }
}