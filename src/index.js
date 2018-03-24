import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './index.css';

// TODO move this to function
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squars: Array(9).fill(null),
      xIsNext: true,
    };
  }
  nextPlayer = () => (this.state.xIsNext ? 'X' : 'O');

  handleClicked = i => {
    const squars = this.state.squars.slice();
    squars[i] = this.nextPlayer();
    const xIsNext = !this.state.xIsNext;
    this.setState({ squars, xIsNext });
  };

  calculateWinner = squares => {
    const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    _.forEach(lines, line => {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
      return null;
    });
  };

  renderSquare = i => <Square value={this.state.squars[i]} onClick={() => this.handleClicked(i)} />;

  render() {
    const winner = this.calculateWinner(this.state.squars);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.nextPlayer()}`;
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
