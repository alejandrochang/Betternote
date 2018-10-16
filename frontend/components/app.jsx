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
import Main from './main';
import Modal from './modal/modal';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Modal />
    <Switch>
      <ProtectedRoute path="/main" component={Main}/>
      <AuthRoute path="/signup" component={SignupContainer}/>
      <AuthRoute path="/login" component={LoginContainer}/>
      <AuthRoute exact path={'/'} component={HomeContainer}/>
      <Redirect to='/' />
    </Switch>
  </div>
);

export default App;
