
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import {nextHand, setWinner, setBlinds} from './actions';

export class PlayerCircle extends Component {
  // componentDidUpdate() {
  //   console.log('component updation');
  //   let playerInfo = this.props.playerInfo;
  //   if(this.props.inHand.length === 1) {
  //     this.props.dispatch(setWinner());
  //     //heads up logic
  //     if(this.props.headsUp) {
  //
  //       this.props.dispatch(nextHand());
  //       this.props.dispatch(setBlinds());
  //
  //     }
  //   }
  // }

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
    // console.log(this.props.stackSizes);
    return (
      <div className="App">

        <ul className='circle-container'>
          <h5 className='street'>Street: {this.props.street}</h5>
          <h5>Turn: {playerTurn}</h5>
          <li>
            <h3>Player 1</h3>
            <h5>{this.props.playerInfo[0].stackSize}</h5>

          </li>
          <li>
            <h3>Player 2</h3>
            <h5>{this.props.playerInfo[1].stackSize}</h5>

          </li>
        </ul>
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