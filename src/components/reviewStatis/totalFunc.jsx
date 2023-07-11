import React from 'react';
import PropTypes from 'prop-types';

export class TotalStatis extends React.Component {
  render() {
    const { good, neutral, bad } = this.props;

    const total = good + neutral + bad;

    return (
      <div>
        <p>Total: {total}</p>
      </div>
    );
  }
}

TotalStatis.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
