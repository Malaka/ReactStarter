import React from 'react';
import PropTypes from 'prop-types';

// TODO move this to function
export default class Square extends React.Component {
  render() {
    const { winSquar } = this.props;
    const btnClasses = winSquar ? 'square square-win' : 'square';
    return (
      <button className={btnClasses} onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  winSquar: PropTypes.bool,
};
