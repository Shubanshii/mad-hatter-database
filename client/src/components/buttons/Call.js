import React, { Component } from 'react';
import { connect } from 'react-redux';
import { call, fold, raise, check } from '../../actions';


export class Call extends Component {

  call() {
    console.log(`toplay minus contributed ${this.props.toPlay - this.props.playerInfo[0]}`);
    let callAmount;
    this.props.playerInfo.forEach(player => {
      if (player.playerTurn) {
        callAmount = this.props.toPlay - player.contributedTowardsToPlay
        alert(`${player.name} calls ${callAmount}`)
      }
    })


    this.props.dispatch(call());
  }

  render() {
    return (

      <button className="btn btn-success decision" onClick={() => this.call()} type="button" name="call">Call</button>

    );
  }
}

const mapStateToProps = state => ({
  decisions: state.decisions,
  maxBuyIn: state.maxBuyIn,
  playerInfo: state.playerInfo,
  potSize: state.potSize,
  handOver: state.handOver,
  headsUp: state.headsUp,
  inHand: state.inHand,
  toPlay: state.toPlay,
  street: state.street,
  raised: state.raised,
  amountRaised: state.amountRaised
});

export default connect(mapStateToProps)(Call);