import React from 'react';
import { withRouter } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // fetchNotes All notes
    // fetchTags All tags
    // fetchNotebooks All notebooks => All sub-notes of a notebook
  }

  logoutUser() {
    return(e) => {
      e.preventDefault();
      this.props.logout();
      this.props.history.push('/');
    };
  }

  openModal(field) {
    return(e) => {
      e.preventDefault();
      this.props.openModal(field)
    }
  }

  render() {
    if (this.props.currentUserId) {
      return (
          <div className="sidebar-main">
            <h1>In SIDEBAR</h1>
            <div className="sidebar-logo">
              <img className="sidebar-img" src="https://www.shareicon.net/data/512x512/2016/11/22/855132_notes_512x512.png"/>
            </div>

            <div>

            </div>
          </div>
      );
    }
  }
}

export default SideBar;
