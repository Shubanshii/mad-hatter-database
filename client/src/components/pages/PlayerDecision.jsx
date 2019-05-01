import React, { Component } from 'react';
import { connect } from 'react-redux';
import { call, fold, raise, check } from '../../actions';
import Check from '../buttons/Check';
import Call from '../buttons/Call'
import Fold from '../buttons/Fold'


export class PlayerDecision extends Component {

  raise(e) {
    e.preventDefault();
    const value = this.input.value;
    this.props.playerInfo.forEach(player => {
      if (player.playerTurn) {
        if (this.props.street !== "Preflop" && !this.props.raised) {
          alert(`${player.name} bets ${value}`)
        } else {

          alert(`${player.name} raises to ${value}.`)
        }
      }
    })
    this.props.dispatch(raise(value));
  }

  render() {
    //const playerCount = this.props.playerCount;
    //  const player = this.props.playerInfo.find(player => player.playerTurn === true);
    const ColoredLine = ({ color }) => (
      <hr
        style={{
          color: color,
          backgroundColor: color,
          height: 5
        }}
      />
    );

    let raised = this.props.raised;
    let street = this.props.street;
    let contributed = 0;
    let stackSize = 0;
    this.props.playerInfo.forEach(player => {
      if (player.playerTurn) {
        contributed = player.contributedTowardsToPlay;
        stackSize = player.stackSize;
      }
    })

    let minRaise = 0;
    let maxRaise = contributed + stackSize;
    if (street === 'Preflop') {
      if (!raised) {
        minRaise = this.props.toPlay * 2;

        if (stackSize + contributed === 0) {
          alert('log preflop scenario of blind being all in')
        }
        else if (stackSize + contributed < minRaise) {
          minRaise = stackSize + contributed;
          maxRaise = stackSize + contributed;
        }
      } else {
        // minRaise = this.props.toPlay * 2 - 1;

        minRaise = this.props.toPlay + this.props.amountRaised;
        if (stackSize + contributed < minRaise) {

          minRaise = stackSize + contributed;
          maxRaise = stackSize + contributed;
        }
      }
    } else {
      if (!raised) {
        minRaise = this.props.maxBuyIn / 100;
        maxRaise = stackSize;
        if (stackSize < minRaise) {
          minRaise = stackSize;
          maxRaise = stackSize;
        }
      } else {
        minRaise = this.props.toPlay + this.props.amountRaised;
        maxRaise = contributed + stackSize;

        if (stackSize + contributed < minRaise) {
          minRaise = stackSize + contributed;
          maxRaise = stackSize + contributed;
        }
      }
    }


    return (
      <div className="App mt-3">
        {/*<h2>Your Stack Size:</h2>
        <h6>100</h6>*/}
        <ColoredLine color="red" />
        <h2>Pot Size: {this.props.potSize}</h2>

        <form className="raise-form" onSubmit={e => this.raise(e)}>
          <input
            type="number"
            step="0.01"
            name="raiseAmount"
            id="raiseAmount"
            className="text"
            min={minRaise}
            max={maxRaise}
            /*max="100"*/
            placeholder={minRaise}
            autoComplete="off"
            /*aria-labelledby="feedback"*/
            ref={input => (this.input = input)}
            required
          />
          <button
            type="submit"
            name="submit"
            id="raiseButton"
            className="button"
          >
            Bet/Raise to
          </button>
        </form>
        <form>
          {/*<h2>Player {this.props.playerTurn} act</h2>*/}
          <div className="form-section">
            <div className="row">
              <div className="col-3">

              </div>
              <div className="col-6">
                {!this.props.decisions[0].isHidden ? <Check /> : null}
                {/* <button className="btn btn-success decision" onClick={() => this.check()} type="button" name="check">Check</button>*/}
                {!this.props.decisions[2].isHidden ? <Call /> : null}
                {/*<button className="btn btn-success decision" onClick={() => this.call()} type="button" name="call">Call</button>*/}
                {!this.props.decisions[1].isHidden ? <Fold /> : null}
              </div>

              <div className="col-3"></div>
              {/*<button className="btn btn-success decision" onClick={() => this.fold()} type="button" name="fold">Fold</button>*/}
            </div>

            {/*<div>
              <label>
                Raise:
                <input className="amount" type="number" name="amount" placeholder="12" />
              </label>
              <input onClick={(e) => this.raise(e)} type="submit"/>
            <label htmlFor="raise">Raise</label>
            <input onClick={() => this.raise()} type="number" name="amount" placeholder="12" />
          </div>*/}
          </div>
        </form>
      </div>
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

export default connect(mapStateToProps)(PlayerDecision);