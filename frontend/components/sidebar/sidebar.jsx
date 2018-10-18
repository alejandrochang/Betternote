import React from 'react';
import { withRouter } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownVisible: false,
      dropdownVisibleTwo: false
    };

    this.handleNewNote = this.handleNewNote.bind(this);
    this.renderDropDownTwo = this.renderDropDownTwo.bind(this);
    this.renderDropDown = this.renderDropDown.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleDropdownTwo = this.toggleDropdownTwo.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotes();
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
                  <div className="standard"><span className="dropdown-words">Settings</span></div>
                </div>
              </li>
              <li id="standard-2">
                <div className="standard-2"><span className="dropdown-words">Help</span></div>
              </li>
              <li id="standard-3">
                <div className="standard-3"><span className="dropdown-words">What's new in Betternote Web</span></div>
              </li>
              <li id="standard-4">
                <div className="standard-4"><span className="dropdown-words">Switch to older version of Betternote</span></div>
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

  renderDropDownTwo() {
    let { dropdownVisibleTwo } = this.state;
    return !dropdownVisibleTwo
      ? null
      : (
        <div className="dropdown-container-2">
          <div className="notebook-list">
            <span className="notebook-dropdown-style"></span>
          </div>
        </div>
      )
  }

  toggleDropdown() {
    let dropdownVisible = !this.state.dropdownVisible;
    this.setState({ dropdownVisible });
  }

  toggleDropdownTwo() {
    let dropdownVisibleTwo = !this.state.dropdownVisibleTwo;
    this.setState({ dropdownVisibleTwo });
  }

  logoutUser() {
    return (e) => {
      e.preventDefault();
      this.props.logout();
      this.props.history.push('/');
    };
  }

  handleNewNote() {
    this.props.addNewNote({notebook_id: 1, title: "Untitled", user_id: this.props.currentUser.id});
  }

  render() {
    return (
      <div className="sidebar-background">
        { this.renderDropDown() }
        <div className="sidebar-main">
          <div classname='dropdown-header' onClick={this.toggleDropdown}>
              <img className="sidebar-img" src="https://www.shareicon.net/data/512x512/2016/11/22/855132_notes_512x512.png"/>
              <span id="name-style-2">{this.props.currentUser.username}</span>
              <img className="down-arrow-img" src="https://www.thrivingparish.org/wp-content/uploads/2018/01/white-down-arrow-png-2-300x300.png"/>
          </div>
          <div className="search-bar">
            <input className="search-bar-styling" type="text" placeholder="Search all notes..."/>
            <div onClick={this.handleNewNote} className="add-icon-container">
              <img className="add-note-img" src="https://cdn0.iconfinder.com/data/icons/ie_Bright/512/plus_add_green.png"/>
              <span className="new-note">New Note</span>
            </div>
          </div>

          <div className="shortcuts-container">
            <div className="shortcuts-img">
                <img className="sideways-playbutton" src="https://amberream.github.io/youtube-power-up/images/yt_icon_gray.png"/>
                <img className="sideways-star" src="http://www.clker.com/cliparts/2/4/T/f/0/4/star-grey-hi.png"/>
                <span className="sidebar-words">Shortcuts</span>
            </div>
            <div className="sidebar-list">
              <div className="all-notes">
                <img className="notes-icon" src="https://mbtskoudsalg.com/images/notes-grey-icons-png-1.png"/>
                <span className="all-notes-words">All Notes</span>
              </div>
              <div className="notebooks" onClick={this.toggleDropdownTwo}>
                { this.renderDropDownTwo() }
                <img className="sideways-playbutton" src="https://amberream.github.io/youtube-power-up/images/yt_icon_gray.png"/>
                <img className="notebook-img" src="https://cdn1.iconfinder.com/data/icons/google_jfk_icons_by_carlosjj/512/notebook.png"/>
                <span className="sidebar-words">Notebooks</span>
              </div>
              <div className="shared-with-me">
                <img className="people-img" src="https://cdn0.iconfinder.com/data/icons/superuser-web-kit/512/686912-users_people_men_humans_heads_persons-512.png"/>
                <span className="sidebar-words">Shared with Me</span>
              </div>
              <div className="sidebar-tags">
                <img className="tags-img" src="http://icon-park.com/imagefiles/tag_gray.png"/>
                <span className="sidebar-words">Tags</span>
              </div>
              <div className="sidebar-trash">
                <img className="trash-img" src="http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-8/256/Trash-can-icon.png"/>
                <span className="sidebar-words">Trash</span>
              </div>
              <div className="sidebar-upgrade">
                <img className="upgrade-img" src="https://cdn4.iconfinder.com/data/icons/weather-394/65/25-512.png"/>
                <span className="sidebar-words">Upgrade</span>
              </div>
            </div>
          </div>
          <div className="sidebar-footer">
            <div className="gray-line-3"></div>
            <img className="trumpet-img" src="https://cdn0.iconfinder.com/data/icons/people-and-lifestyle/64/music-trumpet-art-orchestra-512.png"/>
            <span className="feedback-words">Send Feedback</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
