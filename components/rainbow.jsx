import React from 'react';
import {
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import Red from './red';
import Green from './green';
import Blue from './blue';
import Violet from './violet';

class Rainbow extends React.Component {
  render() {
    return (
      <div>
        <h1>Rainbow Router!</h1>
          <NavLink to="/red">Red</NavLink>
          <NavLink to="/blue">Blue</NavLink>
          <NavLink to="/green">Green</NavLink>
          <NavLink to="/violet">Violet</NavLink>

        <div id="rainbow">
          <Route exact path="/red" component={Red} /> 
          <Route path="/red/orange" component={Red} /> 
          <Route path="/red/yellow" component={Red} /> 
          <Route path="/green" component={Green} /> 
          <Route exact path="/blue" component={Blue} /> 
          <Route path="/blue/indigo" component={Blue} /> 
          <Route path="/violet" component={Violet} /> 
        </div>
      </div>
    );
  }
};

export default Rainbow;
