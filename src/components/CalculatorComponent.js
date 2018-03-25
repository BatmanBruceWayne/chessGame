import React from 'react';

class CalculatorComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>Tính</h1>
        <button onClick={()=>this.props.increment(1)}> +1</button>
        <button onClick={()=>this.props.increment(4)}> +4</button>
        <button onClick={()=>this.props.increment(5)}> +5</button>
        <h2>{this.props.result}</h2>
      </div>
    );
  }
}


export default CalculatorComponent;
