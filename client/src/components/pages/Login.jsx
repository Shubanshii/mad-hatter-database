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
          Username: <input type="text" value='TestUser' name="username" onChange={this.handleInputChange} /> <br />
          Password: <input type="password" value='testpass' name="password" onChange={this.handleInputChange} /> <br />
          <button onClick={(e) => this.handleClick(e)}>Login</button>
        </form>
        {this.state.message && <div className="info info-danger">
          {this.state.message}
        </div>}
        <p className="instructions">The Mad Hatter is an action tracker for Texas Hold'Em
It's use case is currently for 2 people with a deck of cards,
but no poker chips or decent substitute for poker chips.

It is best used on a tablet.  Deal the cards, then enter
your bets, raises, checks, calls, etc. on the app.

Make an account.  Create a game.  Then save the game.
The saved game will be available on your profile dashboard.</p>
      </div>
    );
  }
}
