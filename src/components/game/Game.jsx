import React from 'react';
import { hot } from 'react-hot-loader';
import _ from 'lodash';

import Board from '../board/Board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { history: [{ squares: Array(9).fill(null) }], stepNumber: 0, currentMove: 0, xIsNext: true };
  }

  nextPlayer = () => (this.state.xIsNext ? 'X' : 'O');

  handleClicked = i => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = this.calculateWinner(squares);
    if (winner[0] || squares[i]) {
      // already won or clicked
      return;
    }
    squares[i] = this.nextPlayer();
    const xIsNext = !this.state.xIsNext;
    this.setState({
      history: history.concat([
        {
          squares,
        },
      ]),
      stepNumber: history.length,
      currentMove: i,
      xIsNext,
    });
  };

  calculateWinner = squares => {
    const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    return _.filter(lines, ([a, b, c]) => squares[a] && squares[a] === squares[b] && squares[a] === squares[c]);
  };

  jumpTo = step => {
    this.setState({ stepNumber: step, xIsNext: step % 2 === 0 });
  };

  render() {
    const { history } = this.state;
    const current = history[this.state.stepNumber];
    const { squares } = current;
    const winner = this.calculateWinner(squares);

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      const btn =
        move === this.state.stepNumber && this.state.stepNumber + 1 !== history.length ? (
          <button onClick={() => this.jumpTo(move)}>
            <strong> {desc}</strong>
          </button>
        ) : (
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        );
      return <li key={move}>{btn}</li>;
    });

    let status;
    if (winner[0]) {
      status = `Winner: ${squares[winner[0][0]]}`;
    } else {
      status = `Next player: ${this.nextPlayer()}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squars={squares} handleClicked={this.handleClicked} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default hot(module)(Game);
