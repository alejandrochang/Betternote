import { connect } from 'react-redux';
import NoteForm from './note_form';
import {
  fetchNote,
  fetchNotes,
  createNote,
  updateNote,
  deleteNote,
  changeNote
} from '../../../actions/note_actions';
import { fetchNotebooks } from '../../../actions/notebook_actions';
import { fetchCurrentNote } from '../../../actions/note_actions';

const mapStateToProps = state => {
  console.log(state)
  return {
    note: Object.values(state.entities.notes)[0],
    currentNote: state.entities.notes[state.ui.currentNote]
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNote: (id) => dispatch(fetchNote(id)),
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    createNote: (note) => dispatch(createNote(note)),
    updateNote: (note) => dispatch(updateNote(note)),
    deleteNote: (id) => dispatch(deleteNote(id)),
    fetchCurrentNote: (note) => dispatch(fetchCurrentNote(note)),
    changeNote: (id) => dispatch(changeNote(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
