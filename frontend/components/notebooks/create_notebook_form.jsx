import { connect } from 'react-redux';
import CreateNotebookForm from './create_notebook_form';
import { CreateNotebookForm } from '../../actions/notebook_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUserId,
});

const mapDispatchToProps = dispatch => ({
  createNotebook: notebook => dispatch(createNotebook(notebook))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateNotebookForm);
