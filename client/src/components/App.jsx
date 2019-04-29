import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile'
import Game from './pages/Game'
import api from '../api';
import './App.css';
import logo from '../logo.svg';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  handleLogoutClick(e) {
    api.logout()
  }

  getProfile = () => {
    console.log('getting profile')

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mad HATter</h1>
          <NavLink to="/" exact>Home</NavLink>
          {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link>}
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/game/:id" component={Game} />

          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    );
  }
}