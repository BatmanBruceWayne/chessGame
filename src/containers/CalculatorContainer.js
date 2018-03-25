/**
 * Created by phanmduong on 9/4/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CalculatorComponent from '../components/CalculatorComponent';
import * as calculatorActions from '../actions/calculatorActions';

class CalculatorContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.increment = this.increment.bind(this);
  }

  increment(value) {
    this.props.calculatorActions.increment(value);
  }

  render() {
    return (
      <CalculatorComponent
        result={this.props.result}
        increment={this.increment}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    result: state.calculator.result
  };
}

function mapDispatchToProps(dispatch) {
  return {
    calculatorActions: bindActionCreators(calculatorActions, dispatch)
}
  ;
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer);
