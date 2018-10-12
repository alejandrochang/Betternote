import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import SignupFormContainer from '../session/signup_form_container';
import { Route, withRouter } from "react-router-dom";
import SplashContainer from './splash/splash';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div class="main-home">

        <div>
          <NavbarContainer />
        </div>

        <div className="first-splashview">
          <div className="big-home-slide">
            <h1 className="big-slide">Meet Betternote, the best way to organize your life. </h1>
            <p className="small-slide">Be efficient with your time, plan at a moments
              notice and focus on what really matters.</p>
          </div>
        </div>

        <div className="signup-form-container">
          <h2 className="signup-message-text">Sign Up for Free</h2>
          <Route component={SignupFormContainer} />
        </div>

        <div>
          <SplashContainer />
        </div>
      </div>
    );
  }
}

export default Home;
