import React from 'react';
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from 'react-html-parser';

class NotesListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  currentWorkingNote() {
    this.props.fetchCurrentNote(this.props.note.id);
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
    let title = ReactHtmlParser(this.props.note.title);
    let body = ReactHtmlParser(this.props.note.body);
    return <div>
        <div onClick={() => this.props.changeNote(this.props.note.id)} className="individual-note">
          <div className="note-container">
            <div className="note-title">
              <span className="note-words-1">{title}</span>
            <button onClick={this.deleteNote()} className="delete-div">
              <img className="delete-note" src="http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-8/256/Trash-can-icon.png" />
            </button>
            </div>
            <div className="note-body">
              <span className="note-words-2">{body}</span>
            </div>
            <div className="note-date">
              <span className="note-words-3">
                {new Date(this.props.note.updated_at.toUpperCase()).toDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>;
  }
}


export default NotesListItem;
