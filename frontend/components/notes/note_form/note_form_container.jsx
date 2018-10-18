import { connect } from 'react-redux';
import NoteForm from './note_form';
import {
  fetchNote,
  createNote,
  updateNote,
  deleteNote
} from '../../../actions/note_actions';
import { fetchNotebooks } from '../../../actions/notebook_actions';
import { fetchCurrentNote } from '../../../actions/note_actions';

const mapStateToProps = state => {
  return {
    allNotes: state.entities.notes,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNote: (id) => dispatch(fetchNote(id)),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    createNote: (note) => dispatch(createNote(note)),
    updateNote: (note) => dispatch(updateNote(note)),
    deleteNote: (id) => dispatch(deleteNote(id)),
    fetchCurrentNote: (note) => dispatch(fetchCurrentNote(note))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
