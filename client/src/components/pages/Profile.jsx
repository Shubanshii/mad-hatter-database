import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { setName } from '../../actions'
import api from '../../api';

export class Profile extends Component {

  state = {
    redirect: false,
    games: []
  }

  componentDidMount() {
    this.getGames();
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      console.log('setting')
      return <Redirect to='/game' />
    }
  }

  makeRoom(e) {
    e.preventDefault();
    const value = this.input.value;
    this.props.dispatch(setName(value));
    this.setRedirect()

  }

  showGames = () => {
    return this.state.games.map((game) => {
      return <Link to={`/game/${game._id}`}><li>{game.name}</li></Link>
    })
  }

  getGames = () => {
    api.getGames().then(games => {
      this.setState({
        games
      })

    })
  }

  render() {
    return (
      <div className="Profile">
        {this.renderRedirect()}
        <h2>Start a game or continue one of your games.</h2>
        <form onSubmit={e => this.makeRoom(e)}>
          <input
            type="text"
            name="roomName"
            id="roomName"
            className="text"
            placeholder="Name of room"
            autoComplete="off"
            /*aria-labelledby="feedback"*/
            ref={input => (this.input = input)}
            required
          />
          <button
            type="submit"
            name="submit"
            id="roomButton"
            className="button"
          >
            Make and Join Room
          </button>
        </form>
        <ul className="saved-games">{this.showGames()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  room: state.room
});

export default connect(mapStateToProps)(Profile);