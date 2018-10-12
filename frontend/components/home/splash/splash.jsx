import React from 'react';
import { Link }  from 'react-router-dom';

// splash page with all images etc.
class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="splash-main">
          <div className="splash-img-one">
  					<img className="splash-image" src="https://evernote.com/c/assets/marketing/home/benefit-1.png"/>
  				</div>

          <div className="splash-content">
  						<h2 className="splash-headings">Remember everything important</h2>
  						<p className="splash-font">
  							Declutter your life by storing your notes, ideas, tasks and reminders all in one place.
  						</p>
          </div>
        </div>

        <div className="splash-main">
          <div className="splash-content">
  						<h2 className="splash-headings-special">Stay organized, wherever and whenever</h2>
  						<p className="splash-font-special">
  							Plan better, manage projects and keep records through notes, tables, checklists, attachements and more.
  						</p>
          </div>
          <div className="splash-img-two">
  					<img className="splash-image" src="https://evernote.com/c/assets/marketing/home/benefit-2.png"/>
  				</div>
        </div>

        <div className="splash-main">
          <div className="splash-img-one">
  					<img className="splash-image" src="https://evernote.com/c/assets/marketing/home/benefit-3.png"/>
  				</div>

          <div className="splash-content">
  						<h2 className="splash-headings">Collaborate with your team</h2>
  						<p className="splash-font">
  							Stay on top of deadlines, clients and meetings all the time, anywhere.
  						</p>
          </div>
        </div>

      </div>
    );
  }
}

export default Splash;
