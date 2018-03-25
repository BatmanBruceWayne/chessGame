/**
 * Created by phanmduong on 9/4/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ResultComponent from '../components/ResultComponent';

class ResultContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <ResultComponent
        result={this.props.result}
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
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultContainer);
