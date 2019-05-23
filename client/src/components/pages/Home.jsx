import React, { Component } from 'react';
import api from '../../api';

export default class Home extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }

  // checkIfLoggedIn = () => {
  //   if (api.isLoggedIn()) {
  //     this.props.history.push("/profile") // Redirect to the home page
  //   }
  // }

  render() {
    console.log('api from home component', api.getLocalStorageUser())
    return (

      <div className="Home text-center">

        <h2>Home</h2>
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
