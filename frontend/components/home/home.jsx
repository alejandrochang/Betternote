import React from 'react';
import SignupFormContainer from '../session/signup_form_container';
import { Route, withRouter } from "react-router-dom";
import Splash from './splash/splash';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Introducing Betternote, the best way to organize your life. </h1>
      </div>
    );
  }
}

export default Home;
