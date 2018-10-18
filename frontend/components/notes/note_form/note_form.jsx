import ReactQuill from 'react-quill';
import React from 'react';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {title: "", body: ""};
  }

  handleChangeBody(text) {
    this.setState({ body: text})
  }

  handleChangeTitle(title) {
    this.setState({ title: title})
  }

  render() {
    return (
      <div>
        <div className="quill-container">
          <div className="quill-header"></div>
          <ReactQuill
            placeholder={"TITLE \n\nStart writing, drag files or choose a template"}
            className="quill"
            theme="snow"
            modules={modules}
            value={this.state.body}
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
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],
  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction
  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],
  ['clean']                                         // remove formatting button
];

const modules = {
  toolbar: toolbarOptions
};

export default NoteForm;
