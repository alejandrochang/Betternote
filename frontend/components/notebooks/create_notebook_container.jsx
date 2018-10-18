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
      <div>
        

      </div>
    );
  }
}

export default CreateNotebookForm;
