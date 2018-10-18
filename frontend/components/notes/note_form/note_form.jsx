import ReactQuill from 'react-quill';
import React from 'react';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);


    this.state = {title: "", body: "", text: "", id: ""};
    this.handleChangeBody = this.handleChangeBody.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.state.id != newProps.note.id) {
      const text = newProps.note.title + newProps.note.body
      this.setState({title: newProps.note.title, body: newProps.note.body, id: newProps.note.id, text: text})
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

  updateNote() {

  }

  render() {
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
          <ReactQuill
            placeholder={"TITLE \n\nStart writing, drag files or choose a template"}
            className="quill"
            theme="snow"
            modules={modules}
            value={this.state.text}
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
