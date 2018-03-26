import React from 'react';
import { hot } from 'react-hot-loader';
import _ from 'lodash';

import Board from '../board/Board';
import MoveHistory from './MoveHistory';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { history: [{ squares: Array(9).fill(null) }], moves: [], stepNumber: 0, xIsNext: true };
  }

  nextPlayer = () => (this.state.xIsNext ? 'X' : 'O');

  handleClicked = i => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const moves = this.state.moves.slice(0, this.state.stepNumber);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = this.calculateWinner(squares);
    if (winner[0] || squares[i]) {
      // already won or clicked
      return;
    }

    moves.push(i + 1);
    squares[i] = this.nextPlayer();
    const xIsNext = !this.state.xIsNext;
    this.setState({
      history: history.concat([
        {
          squares,
        },
      ]),
      moves,
      stepNumber: history.length,
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
    const { moves: moveHistory } = this.state;
    const current = history[this.state.stepNumber];
    const { squares } = current;
    const winner = this.calculateWinner(squares);

    const moves = history.map((step, index) => {
      const desc = index ? `Go to move #${index}` : 'Go to game start';
      const clickedMove = index === this.state.stepNumber && this.state.stepNumber + 1 !== history.length;
      const btn = (
        <MoveHistory
          moveStep={index}
          move={moveHistory[index - 1]}
          desc={desc}
          clickedMove={clickedMove}
          jumpTo={this.jumpTo}
        />
      );

      return <li key={index}>{btn}</li>;
    });

    let status;
    const winCombo = winner[0];
    if (winCombo) {
      status = `Winner: ${squares[winCombo[0]]}`;
    } else if (moveHistory.length === 9) {
      status = `Game Ended in a Drow`;
    } else {
      status = `Next player: ${this.nextPlayer()}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squars={squares} handleClicked={this.handleClicked} winCombo={winCombo} />
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
