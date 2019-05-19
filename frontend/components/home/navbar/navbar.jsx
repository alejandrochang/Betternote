import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav>
          <div className="home-navbar"><img align="middle" className="home-logo-img" src="https://www.devicemagic.com/wp-content/uploads/2017/01/evernote-1.png"/>
              <span className="home-logo-text">BETTERNOTE</span>

                <a
                  className='linkedin-icon-container'
                  href="https://www.linkedin.com/in/alejandro-chang-086936126/"
                  rel="noopener noreferrer"
                  target="_blank">
    						<span><img className="linkedin-icon" src="https://png.icons8.com/metro/1600/linkedin.png"/></span>
    					  </a>

                <a
                  className='github-icon-container'
                  href="https://github.com/alejandrochang"
                  rel="noopener noreferrer"
                  target="_blank">
                  <span><img className="github-icon" src="https://img.icons8.com/ios/104/000000/github-filled.png"/></span>
                </a>

                <a id="nav-login-container">
                  <a id="nav-login" href="#/login">Log in</a>
                </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
