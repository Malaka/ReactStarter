import React from 'react';
import PropTypes from 'prop-types';
import constDate from '../../Const';

export default class MoveHistory extends React.Component {
  calculateCordinates = n => {
    if (!n) {
      return '';
    }
    const { boardSize } = constDate;
    const x = n % boardSize ? n % boardSize : boardSize;
    const y = Math.ceil(n / boardSize);
    return `(${x},${y})`;
  };

  render() {
    const { moveStep } = this.props;
    const { desc } = this.props;
    const { move } = this.props;
    const cordicates = this.calculateCordinates(move);

    const btn = this.props.clickedMove ? (
      <button onClick={() => this.props.jumpTo(moveStep)}>
        <strong>
          {desc}
          {cordicates}
        </strong>
      </button>
    ) : (
      <button onClick={() => this.props.jumpTo(moveStep)}>
        {desc}
        {cordicates}
      </button>
    );

    return btn;
  }
}

MoveHistory.propTypes = {
  moveStep: PropTypes.number,
  move: PropTypes.number,
  desc: PropTypes.string,
  clickedMove: PropTypes.bool,
  jumpTo: PropTypes.func,
};
