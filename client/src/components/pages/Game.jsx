// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import api from '../../api';

// export class Game extends Component {
//   // constructor(props) {
//   //   super(props)
//   //   this.state = {
//   //   }
//   // }

//   componentDidMount() {
//     console.log(this.props.match.params.id)
//     api.getGame(this.props.match.params.id)
//       .then(res => console.log(res))
//   }

//   saveGame = () => {
//     console.log(this.props)
//     console.log(this.props.name);
//     let { playerCount, playerInfo, name } = this.props;
//     console.log(playerCount, playerInfo, name)

//     api.addGame({ playerCount, playerInfo, name }).then(game => {
//       console.log(game);
//     })
//   }

//   render() {
//     return (
//       <div className="Game">
//         <h2>Game</h2>
//         <p>This is a sample game with the MERN stack</p>
//         <button onClick={this.saveGame}>Save Game</button>
//         <h1>Player Count: {this.props.playerCount}</h1>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   name: state.name,
//   playerCount: state.playerCount,
//   playerInfo: state.playerInfo
// });

// export default connect(mapStateToProps)(Game);

import React, { Component } from 'react';
import PlayerCircle from './PlayerCircle';
import PlayerDecision from './PlayerDecision';
import Notification from './Notification';
import { connect } from 'react-redux';
import { beginGame } from '../../actions';
import api from '../../api';

export class Game extends Component {
  componentDidMount() {
    api.getGame(this.props.match.params.id)
      .then(res => this.props.dispatch(beginGame(res)))

    // this.props.dispatch(beginGame());
  }

  saveGame = () => {
    console.log('this.props', this.props)
    console.log(this.props.name);
    let { playerCount, playerInfo, name } = this.props;
    console.log(playerCount, playerInfo, name)

    api.updateGame(this.props.match.params.id, { playerCount, playerInfo, name: 'name' }).then(game => {
      console.log(game);
    })
  }

  render() {

    return (
      <div className="App">
        <main role="main">
          <header>
            <h1>Table Name</h1>
          </header>
          <Notification />
          <PlayerCircle />
          <PlayerDecision />
          <button onClick={this.saveGame}>Save Game</button>

        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playerCount: state.playerCount,
  playerInfo: state.playerInfo
});

export default connect(mapStateToProps)(Game);