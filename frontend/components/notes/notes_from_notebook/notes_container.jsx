import {connect} from 'react-redux';
import Notes from './notes';
import {
  fetchNotes,
  fetchNote,
  deleteNote
} from '../../../actions/note_actions';

const mapStateToProps = state => {
  return {
    notes: Object.values(state.entities.notes),
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNote: id => dispatch(fetchNote(id)),
    deleteNote: id => dispatch(deleteNote(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes)
