import React, { Component } from 'react';
import PlayerCircle from './PlayerCircle';
import PlayerDecision from './PlayerDecision';
import Notification from './Notification';
import { connect } from 'react-redux';
import { beginGame, setName, resumeGame } from '../../actions';
import api from '../../api';


export class Game extends Component {
  componentDidMount() {
    api.getGame(this.props.match.params.id)
      .then(res => {
        if(!res.saved) {
          console.log('logging begin dispatch', res)
          this.props.dispatch(beginGame(res))
          this.props.dispatch(setName(res.name))

        } else{
          console.log('logging resume dispatch)')
          this.props.dispatch(resumeGame(res))
        }
        

      })

    // this.props.dispatch(setName())
  }

  saveGame = () => {
    let { handIndex, playerCount, playerInfo, name, saved } = this.props;
    saved = true
    console.log('logging saved from savegame func', saved)

    api.updateGame(this.props.match.params.id, { playerCount, playerInfo, name, handIndex, saved }).then(game => {
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
  playerInfo: state.playerInfo,
  handIndex: state.handIndex,
  saved: state.saved
});

export default connect(mapStateToProps)(Game);