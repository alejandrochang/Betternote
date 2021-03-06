import React from 'react';
import NotesItem from './notes_item';

class Notes extends React.Component {
  constructor(props) {
    super(props);

    this.renderNoteWord = this.renderNoteWord.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  renderNoteWord() {
    if (this.props.notes.length === 1) {
      return 'Note';
    } else {
      return 'Notes';
    }
  }

  renderAllNotes() {
    if (this.props.notes) {
      return this.props.notes.map((note) =>
        <NotesItem props={this.props} key={note.id} note={note} changeNote={this.props.changeNote}></NotesItem>
      );
    }
  }

  renderTitle() {
    return this.props.notes.title
  }

  render() {
    if (this.props.notes.length === 0) {
      return null;
    }
    return (
      <div className="notebar-header-container">
        <div className="notebar-title-container">
          <span className="notebar-words">All Notes</span>
          <div className="notes-count-container"><span className="notes-count">{this.props.notes.length} {this.renderNoteWord()} </span></div>
          <img className="note-tag-dropdown" src="http://icons.iconarchive.com/icons/icons8/ios7/256/Ecommerce-Price-Tag-icon.png"/>
          <div className="gray-line-notebar-right"></div>
          <div className="gray-line-notebar"></div>
        </div>
        <div className="all-notes-individually">
          {this.renderAllNotes()}
        </div>
      </div>
    );
  }
}

export default Notes;
