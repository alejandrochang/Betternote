import React from 'react';

class NotesListItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  currentWorkingNote() {
    this.props.props.fetchCurrentNote(this.props.note.id);
  }

  deleteNote() {
    return e => {
      e.preventDefault();
      e.stopPropagation();
      this.props.props.deleteNote(this.props.note.id);
      this.props.props.closeCurrentNote();
    }
  }


  render() {
    return (
      <div>
        <div className="individual-note">
          <div className="note-container">
            <div className="note-title"><span className="note-words-1">{this.props.note.title}</span></div>
            <div className="note-body"><span className="note-words-2">{this.props.note.body}</span></div>
            <div className="note-date"><span className="note-words-3">{new Date(this.props.note.updated_at.toUpperCase()).toDateString()}</span></div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotesListItem;
