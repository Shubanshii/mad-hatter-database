import React, { Component } from 'react';
import PlayerCircle from './PlayerCircle';
import PlayerDecision from './PlayerDecision';
import Notification from './Notification';
import { connect } from 'react-redux';
import { beginGame, setName } from '../../actions';
import api from '../../api';


export class Game extends Component {
  componentDidMount() {
    api.getGame(this.props.match.params.id)
      .then(res => {
        this.props.dispatch(beginGame(res))
        this.props.dispatch(setName(res.name))


      })

    // this.props.dispatch(setName())
  }

  saveGame = () => {

    let { playerCount, playerInfo, name } = this.props;

    api.updateGame(this.props.match.params.id, { playerCount, playerInfo, name }).then(game => {
      console.log(game);
    })
  }

  render() {

    return (
      <div className="App">
        <main role="main">
          {/* <header>
         </header> 
         <Notification /> */}
          <PlayerCircle />
          <PlayerDecision />
          <button className="btn btn-primary" onClick={this.saveGame}>Save Game</button>

        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.name,
  playerCount: state.playerCount,
  playerInfo: state.playerInfo
});

export default connect(mapStateToProps)(Game);