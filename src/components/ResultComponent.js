import React from 'react';

class ResultComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>Kết quả</h1>
        <h3>{this.props.result}</h3>
      </div>
    );
  }
}


export default ResultComponent;
