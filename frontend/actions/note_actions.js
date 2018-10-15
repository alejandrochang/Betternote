import * as NoteApiUtil from '../util/note_api_util';

export cont RECEIVE_NOTES = 'RECEIVE_NOTES';
export cont RECEIVE_NOTE = 'RECEIVE_NOTE';
export cont DELETE_NOTE = 'DELETE_NOTE';
export cont RECEIVE_NOTE_ERRORS = 'RECEIVE_NOTE_ERRORS';

export const fetchNotes = () => dispatch => (
  NoteApiUtil.fetchNotes().then(notes =>
    dispatch({type: RECEIVE_NOTES, notes}), error => dispatch ({
      type: RECEIVE_NOTE_ERRORS, errors: error.responseJSON
    })
  )
);

export const fetchNote = (id) => dispatch => (
  NoteApiUtil.fetchNote(id).then(note =>
    dispatch({type: RECEIVE_NOTE, note}), error => dispatch ({
      type: RECEIVE_NOTE_ERRORS, errors: error.responseJSON
    })
  )
);

export const createNote = (note) => dispatch => (
  NoteApiUtil.createNote(note).then(note =>
    dispatch({type: RECEIVE_NOTE, note}), error => dispatch ({
      type: RECEIVE_NOTE_ERRORS, errors: error.responseJSON
    })
  )
);

export const updateNote = (note) => dispatch => (
  NoteApiUtil.updateNote(note).then(note =>
    dispatch({type: RECEIVE_NOTE, note}), error => dispatch ({
      type: RECEIVE_NOTE_ERRORS, errors: error.responseJSON
    })
  )
);

export const deleteNote = (id) => dispatch => (
  NoteApiUtil.deleteNote(id).then(() =>
    dispatch({type: DELETE_NOTE, noteId: id}), error => dispatch ({
      type: RECEIVE_NOTE_ERRORS, errors: error.responseJSON
    })
  )
);
