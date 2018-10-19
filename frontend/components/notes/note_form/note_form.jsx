import ReactQuill from 'react-quill';
import React from 'react';


class NoteForm extends React.Component {
  constructor(props) {
    super(props);


    this.state = {title: "", body: "", text: "", id: ""};
    this.handleChangeBody = this.handleChangeBody.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotes();
    if (this.props.note) {
      this.props.changeNote(this.props.note.id);
    }
  }

  componentWillReceiveProps(newProps) {

    if (this.state.id !== newProps.currentNote.id) {
      const text = newProps.currentNote.title + newProps.currentNote.body
      this.setState({title: newProps.currentNote.title, body: newProps.currentNote.body, id: newProps.currentNote.id, text: text})
    }
  }

  handleChangeBody(text) {
    const idx = text.indexOf('/');
    const nextIdx = idx + 3;
    const title = text.slice(0, nextIdx);
    const body = text.slice(nextIdx);
    setTimeout( () => {
      this.props.updateNote(this.state)
    }, 3000)

    this.setState({title: title, body: body, text: text, id: this.props.note.id})
  }

  render() {
    if (!this.props.currentNote) {
      return null;
    }
    return (
      <div>
        <div className="quill-container">
          <div className="quill-header">
            <div className="header-bar">
              <img className="expand-icon" src="http://pngimages.net/sites/default/files/resize-png-image-32280.png"/>
              <a className="first-notebook" href="#/main">| First Notebook</a>
              <input className="share-button" type="submit" value="Share"></input>
            </div>
          </div>
          <input className="quill-title" placeholder="Title"></input>
          <ReactQuill
            placeholder={"Start writing, drag files or choose a template"}
            className="quill"
            theme="snow"
            modules={modules}
            value={ this.state.text }
            onChange={this.handleChangeBody}/>
        </div>
        <div className="quill-footer">
          <div className="inner-quill-footer">
            <input id="add-tag" placeholder="Add tag"></input>
          </div>
        </div>
      </div>
    );
  }
}

var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{ 'header': 1 }, { 'header': 2 }],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],
  [{ 'indent': '-1'}, { 'indent': '+1' }],
  [{ 'direction': 'rtl' }],
  [{ 'size': ['small', false, 'large', 'huge'] }],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  [{ 'color': [] }, { 'background': [] }],
  [{ 'font': [] }],
  [{ 'align': [] }],
  ['clean'],
  ['link', 'image', 'video', 'formula']
];

const modules = {
  toolbar: toolbarOptions
};

export default NoteForm;
