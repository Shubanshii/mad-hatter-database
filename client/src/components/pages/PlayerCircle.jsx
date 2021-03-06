import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notification from './Notification';
//import {nextHand, setWinner, setBlinds} from './actions';

export class PlayerCircle extends Component {

  render() {
    let playerInfo = this.props.playerInfo;
    let playerTurn;
    let smallBlind;
    let bigBlind;
    for (var i = 0; i < playerInfo.length; i++) {
      if (playerInfo[i].smallBlind === true) {
        smallBlind = playerInfo[i].name;
      }
      else if (playerInfo[i].bigBlind === true) {
        bigBlind = playerInfo[i].name;
      }

      if (playerInfo[i].playerTurn) {
        playerTurn = playerInfo[i].name;
      }

    }
    return (

      <div className="row">
        <div className="col-3 align-self-center">
          <h3>Player 1</h3>
          <h5>{this.props.playerInfo[0].stackSize}</h5>
        </div>
        <div className="col-6 align-self-start"><Notification /></div>
        <div className="col-3 align-self-center">
          <h3>Player 2</h3>
          <h5>{this.props.playerInfo[1].stackSize}</h5>
        </div>
      </div>

    );
  }
}


PlayerCircle.defaultProps = {
  // title: 'Board'
};

const mapStateToProps = state => ({
  street: state.street,
  handIndex: state.handIndex,
  playerInfo: state.playerInfo,
  handOver: state.handOver,
  inHand: state.inHand,
  headsUp: state.headsUp

});

export default connect(mapStateToProps)(PlayerCircle);