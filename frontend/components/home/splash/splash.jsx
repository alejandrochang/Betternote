import React from 'react';
import { Link }  from 'react-router-dom';

// splash page with all images etc.
class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
        <div className="splash-background">
          <div className="splash-inner-container">
            <div className="splash-header">
              <img className="pic-head" src="https://evernote.com/c/assets/homepage/homepage-focus.png?699f7824a2e9eaa8" />
            </div>
            <h2 class="pic-heading">Focus on what matters most</h2>
            <div className="splash-footer" />
            <div className="identical-cards">
              Manage everything, from big projects to personal moments.
            </div>
            <div className="identical-cards">
              Capture ideas and inpiration in notes, voice and pictures.
            </div>
            <div className="identical-cards">
              Never lose track of your tasks and deadlines.
            </div>
          </div>
        </div>
        <div className="splash-main">
          {/* <img className="backdrop" src="./app/assets/images/splash-background.png"/> */}
          <img className="splash-image" src="https://evernote.com/c/assets/marketing/home/benefit-1.png" />
          <img className="splash-image" src="https://evernote.com/c/assets/marketing/home/benefit-2.png" />
          <img className="splash-image" src="https://evernote.com/c/assets/marketing/home/benefit-3.png" />
        </div>
        <div className="splash-main-2">
          <p className="splash-font">
            Declutter your life by storing your notes, ideas, tasks and
            reminders all in one place.
          </p>
          <p className="splash-font">
            Plan better, manage projects and keep records through notes,
            tables, checklists, attachements and more.
          </p>
          <p className="splash-font">
            Stay on top of deadlines, clients and meetings all the time,
            anywhere.
          </p>
        </div>
        <div className="rights">
          <p>© 2018 Betternote Corporation. All rights reserved.</p>
          <ul class="links">
            <li className="sub-link">
              <a href="/">Security &nbsp;&nbsp; |</a>
            </li>
            <li className="sub-link">
              <a href="/">Legal &nbsp;&nbsp;&nbsp;&nbsp;|</a>
            </li>
            <li className="sub-link">
              <a href="/">Privacy</a>
            </li>
          </ul>
        </div>
      </div>;
  }
}

export default Splash;
