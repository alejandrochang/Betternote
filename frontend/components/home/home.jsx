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
        <NavbarContainer />
        <div className="signup-form-container">
          <div className="big-home-slide">
            <h1 className="big-slide">Meet Betternote, the best way to organize your life. </h1>
            <p className="small-slide">Be efficient with your time, plan at a moment's
              notice and focus on what really matters. Explore the best note-taking app now!</p>
          </div>
          <Route component={SignupFormContainer} />
        </div>
        {/* <div> */}
          <SplashContainer />
        {/* </div> */}
        <div className="splash-background">
          <img  className="pattern-splash" src="https://evernote.com/img/backgrounds/patterns/main-green.png" />
        </div>
      </div>
    );
  }
}

export default Home;
