import React from 'react';


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