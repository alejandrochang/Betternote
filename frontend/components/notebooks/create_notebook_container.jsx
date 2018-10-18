import 'React' from 'react';
import { withRouter } from 'react-router-dom';

class CreateNotebookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      title: '',
      user_id: this.props.currentUser
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    return (e) => {
      e.preventDefault();
      this.props.createNotebook(this.state);
    }
  }

  render() {
    return(
      <div className="notebook-creator">
        <form className="notebook-form">
          <h2>Create New Notebook</h2>
          <span>Notebooks are useful for grouping notes around a common topic. They can be private or shared.</span>
          <span className="notebook-name">Name</span>
          <input className="new-notebook-input" type="text" onChange={this.handleSubmit("title")} value={this.props.title} placeholder="Notebook Name" autofocus />

          <input id="new-notebook-input" onClick={this.handleSubmit()} placeholder="Notebook Name" value="text">
          </input>
        </form>
      </div>
    );
  }
}

export default CreateNotebookForm;
