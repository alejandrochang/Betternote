import React from 'react';

class NotesListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteNote() {
    return e => {
      e.preventDefault();
      e.stopPropagation();
      this.props.deleteNote();
    }
  }

  render() {
    return (
      <div>
        <div className="individual-note">
          <div className="note-title-container">
            <p className="note-title">
            </p>
            <p className="note-date">
            </p>
            <p className="note-body">
            </p>
          </div>
        </div>
        <div className="delete-note">
          <button className="delete-note-button" onClick={this.deleteNote()}/>
        </div>
      </div>
    );
  }
}

export default NotesListItem;
