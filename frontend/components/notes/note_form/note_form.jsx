import ReactQuill from 'react-quill';
import React from 'react';
import { debounce } from 'lodash';


class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    // console.log("props", props);

    this.state = {title: "", body: "", text: "", id: ""};
    this.handleChangeBody = this.handleChangeBody.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("prevprops", prevProps);
  //   console.log("prevState", prevState);
  // }

  componentWillReceiveProps(newProps) {
    // console.log("currenNoteId", newProps.currentNote.id)
    // console.log("state2", this.state.id)
    // let nextId = newProps.currentNote.id + 1;
    if (newProps.currentNote === undefined) {
      return null;
    }
    if (this.state.id !== newProps.currentNote.id) {
      const text = newProps.currentNote.body //newProps.currentNote.title +
      this.setState({title: newProps.currentNote.title, body: newProps.currentNote.body, id: newProps.currentNote.id, text: text})
    }
  }

  handleChangeTitle(e) {
    this.setState({title: e.target.value}, debounce(this.actionNote, 1000));
  }

  handleChangeBody(text) {
    const body = text.slice(0);
    this.setState({ body: body, text: text, id: this.props.currentNote.id}, debounce(this.actionNote, 1000));
  }

  actionNote() {
    if (this.props.currentNote) {
      return this.props.updateNote(this.state);
    }
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
          <input value={ this.state.title } className="quill-title" placeholder="Title" onChange={this.handleChangeTitle}></input>
          <ReactQuill
            placeholder={"Start writing, drag files or upload something"}
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
