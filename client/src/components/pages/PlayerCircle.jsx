
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
    // console.log(this.props.stackSizes);
    return (
      <div className="App">
        <ul className='circle-container'>
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
  playerInfo: state.playerInfo,
  inHand: state.inHand,
  headsUp: state.headsUp,

});

export default connect(mapStateToProps)(PlayerCircle);