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
          <div class="home-navbar">
              <img
                align="middle"
                class="home-logo-img"
                src="https://www.devicemagic.com/wp-content/uploads/2017/01/evernote-1.png"/>
              <span class="home-logo-text">BETTERNOTE</span>


                <a className='nav-links' href="https://www.linkedin.com/in/alejandro-chang-086936126/">
    						<i class="favicon-linkedin"></i>
    						<span></span>
    					  </a>

                <a className='nav-links' href="https://github.com/alejandrochang">
                <i class="favicon-github"></i>
                <span></span>
                </a>
          </div>
        </nav>

      </div>
    );
  }
}

export default NavBar;
