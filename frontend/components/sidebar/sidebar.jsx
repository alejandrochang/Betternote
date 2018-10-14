import React from 'react';
import { withRouter } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownVisible: false
    };

    this.renderDropDown = this.renderDropDown.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
  }

  componentDidMount() {
    // fetchNotes All notes
    // fetchTags All tags
    // fetchNotebooks All notebooks => All sub-notes of a notebook
  }

  renderDropDown() {
    let { dropdownVisible } = this.state;
    return !dropdownVisible
      ? null
      : (
        <div className="dropdown-container">
          <div className="dropdown-options">
            <ul id="ul-container">
              <li id="word-account">Account</li>
              <li id="account-info">
                <div>
                  <img className="dropdown-img-2" src="https://www.shareicon.net/data/512x512/2016/11/22/855132_notes_512x512.png"/>
                  <span id="name-style">{this.props.currentUser.username}</span>
                  <img className="blue-check-img" src="https://melbournechapter.net/images/checkmark-transparent-blue-6.png"/>
                </div>
              </li>
            </ul>
            <div id="grey-line"></div>
            <ul id="ul-container-2">
              <li id="standard">
                <div className="color-div">
                  <div className="standard">Settings</div>
                </div>
              </li>
              <li id="standard-2">
                <div className="standard-2">Help</div>
              </li>
              <li id="standard-3">
                <div className="standard-3">What's new in Betternote Web</div>
              </li>
              <li id="standard-4">
                <div className="standard-4">Switch to older version of Betternote</div>
              </li>
            </ul>
            <div id="grey-line-2"></div>
            <div className="color-logout">
              <div className="logout-box" onClick={this.logoutUser()}><span className="logout-button">Sign Out</span></div>
            </div>
          </div>
        </div>
      )
  }

  toggleDropdown() {
    let dropdownVisible = !this.state.dropdownVisible;
    this.setState({ dropdownVisible });
  }

  logoutUser() {
    return (e) => {
      e.preventDefault();
      this.props.logout();
      this.props.history.push('/');
    };
  }

  render() {
    return (
      <div className="sidebar-background">
        <div className="sidebar-main">
          <div classname='dropdown-header' onClick={this.toggleDropdown}>
              <img className="sidebar-img" src="https://www.shareicon.net/data/512x512/2016/11/22/855132_notes_512x512.png"/>
              <span id="name-style-2">{this.props.currentUser.username}</span>
              <img className="down-arrow-img" src="https://www.thrivingparish.org/wp-content/uploads/2018/01/white-down-arrow-png-2-300x300.png"/>
          </div>
          { this.renderDropDown() }
          <div className="search-bar">
            <input className="search-bar-styling" type="text" placeholder="Search all notes..."/>
          </div>
          <div>
            <img className="add-note-img" src=""/>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
