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
import HomeContainer from './home/home_container';

const App = () => (

  <div>
    <h1>Betternote, The App</h1>
    <Switch>
      <Route path="/signup" component={SignupContainer}/>
      <Route path="/login" component={LoginContainer}/>
      <Route exact path={'/'} component={HomeContainer}/>
    </Switch>
  </div>
);

export default App;
