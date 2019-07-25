import React, { Component } from 'react';
import api from '../../api';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "TestUser",
      password: "testpass",
      message: null
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick(e) {
    e.preventDefault()
    api.login(this.state.username, this.state.password)
      .then(result => {
        this.props.history.push("/profile") // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    return (
      <div className="Login">
        <h2>Login</h2>
        <form>
          Username: <input type="text" /*value='TestUser'*/ name="username" onChange={this.handleInputChange} /> <br />
          Password: <input type="password" /*value='testpass'*/ name="password" onChange={this.handleInputChange} /> <br />
          <button onClick={(e) => this.handleClick(e)}>Login</button>
        </form>
        {this.state.message && <div className="info info-danger">
          {this.state.message}
        </div>}
        <p className="instructions">The Mad Hatter is an action tracker for Texas Hold'Em. <br/>
It's use case is currently for 2 people with a deck of cards,
but no poker chips or decent substitute for poker chips. <br/>

It is best used on a tablet.  Deal the cards, then enter
your bets, raises, checks, calls, etc. on the app. <br/>

Make an account.  Create a game.  Then save the game. <br/>
The saved game will be available on your profile dashboard.  Save the game at the beginning of a hand before either player has acted.
<br/>    More flexible save features, more players, and support for multiple devices to connect to the same poker room coming soon.</p>
      </div>
    );
  }
}
