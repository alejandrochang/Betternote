import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import SignupContainer from './session/signup_form_container';
import LoginContainer from './session/login_form_container';

const App = () => (

  <div>
    <h1>hello</h1>
    <Switch>
      <Route path="/signup" component={SignupContainer}/>
      <Route path="/login" component={LoginContainer}/>
    </Switch>
  </div>
);

export default App;
