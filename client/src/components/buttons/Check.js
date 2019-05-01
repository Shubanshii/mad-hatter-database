import React, { Component } from 'react';
import { connect } from 'react-redux';
import { call, fold, raise, check } from '../../actions';


export class Check extends Component {

  check() {
    this.props.dispatch(check());
  }

  render() {
    return (
      <button className="btn btn-success decision" onClick={() => this.check()} type="button" name="check">Check</button>
    );
  }
}

// PlayerDecision.defaultProps = {
//     // title: 'Board'
// };
//
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

export default connect(mapStateToProps)(Check);