import {connect} from 'react-redux';
import Notes from './notes';
import {
  fetchNotes,
  fetchNote,
  fetchCurrentNote,
  closeCurrentNote,
  deleteNote,
  changeNote
} from '../../../actions/note_actions';

const mapStateToProps = state => {
  return {
    notes: Object.values(state.entities.notes),
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNote: (id) => dispatch(fetchNote(id)),
    deleteNote: (id) => dispatch(deleteNote(id)),
    fetchCurrentNote: (note) => dispatch(fetchCurrentNote(note)),
    closeCurrentNote: () => dispatch(closeCurrentNote()),
    changeNote: (id) => dispatch(changeNote(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes)
