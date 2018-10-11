import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import SignupFormContainer from '../session/signup_form_container';
import { Route, withRouter } from "react-router-dom";
import Splash from './splash/splash';

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
            <h1 className="big-slide">Meet Betternote, a better way to organize your life. </h1>
            <p className="small-slide">Organize efficiently, plan at a moments notice and focus on what really matters.</p>
          </div>
        </div>

        <div className="signup-form-container">
          <h2 className="signup-message-text">Sign Up for Free</h2>
          <Route component={SignupFormContainer} />

          <div>
            <button class="animated-button">
              <span>Sign In as Demo User</span>
            </button>


            <form class="session-form">
              <h3>
                <span>or</span>
              </h3>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
