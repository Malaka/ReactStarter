import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Square from '../squar/Square';
import constDate from '../../Const';

export default class Board extends React.Component {
  renderSquare = (i, winSquar) => (
    <Square value={this.props.squars[i]} onClick={() => this.props.handleClicked(i)} winSquar={winSquar} />
  );

  render() {
    const { boardSize } = constDate;
    const { winCombo } = this.props;
    const rows = [];
    for (let i = 0; i < boardSize * boardSize; i += boardSize) {
      const row = [];
      for (let j = 0; j < boardSize; j += 1) {
        const winSquar = _.isArray(winCombo) && _.indexOf(winCombo, i + j) >= 0;
        row.push(this.renderSquare(i + j, winSquar));
      }
      rows.push(<div className="board-row">{row}</div>);
    }

    return <div>{rows}</div>;
  }
}

Board.propTypes = {
  squars: PropTypes.instanceOf(Array),
  winCombo: PropTypes.instanceOf(Array),
  handleClicked: PropTypes.func,
};
