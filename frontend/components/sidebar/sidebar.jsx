import React from 'react';
import { withROuter } from 'react-router-dom';

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

  render() {
    return (
      if (this.props.currentUserId) {
        <div className="sidebar-main">
          <div className="sidebar-logo">
            <img className="sidebar-img" src=""/>
          </div>

        </div>
      }
    );
  }
}

export default SideBar;
