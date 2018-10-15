import React from 'react';
import NotesItem from './notes_item';

class Notes extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  renderAllNotes() {
    //render all notes and sends it to Notes Item
  }

  renderTitle() {
    // notebook title

  }

  render() {
    if (!this.props.notes) {
      return null;
    }
    return (
      <div className="notebar-header-container">
        <div className="notebar-title-container">
          <span className="notebar-words">All Notes</span>
        </div>
        <div className="notebar-under-title">
          <div className="notes-count-container"><span className="notes-count">6 Notes</span></div>
          <img className="note-tag-dropdown" src="http://icons.iconarchive.com/icons/icons8/ios7/256/Ecommerce-Price-Tag-icon.png"/>
        </div>
      </div>
    );
  }
}

export default Notes;
