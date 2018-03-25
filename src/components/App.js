/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router';
import {Switch, NavLink} from 'react-router-dom';
import ResultContainer from '../containers/ResultContainer';
import CalculatorContainer from '../containers/CalculatorContainer';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = {color: 'blue'};
    return (
      <div>
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>Kết quả</NavLink>
          {' | '}
          <NavLink to="/calculator" activeStyle={activeStyle}>Tính</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={ResultContainer}/>
          <Route path="/calculator" component={CalculatorContainer}/>
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
