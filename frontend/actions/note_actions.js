import * as NoteApiUtil from '../util/note_api_util';

export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const RECEIVE_NOTE_ERRORS = 'RECEIVE_NOTE_ERRORS';
export const CURRENT_NOTE = 'CURRENT_NOTE';
export const CLOSE_CURRENT_NOTE = 'CLOSE_CURRENT_NOTE'

export const fetchNotes = () => dispatch => {
  return (
    NoteApiUtil.fetchNotes().then(notes =>
      dispatch({type: RECEIVE_NOTES, notes}), error => dispatch ({
        type: RECEIVE_NOTE_ERRORS, errors: error.responseJSON
      })
    )
  );
}

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

export const fetchCurrentNote = note => {
  return {
    type: CURRENT_NOTE,
    currentNote: note.id
  };
};

export const closeCurrentNote = note => {
  return {
    type: CLOSE_CURRENT_NOTE,
  };
};
