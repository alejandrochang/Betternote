import {RECEIVE_NOTE, RECEIVE_NOTE_ERRORS} from '../../actions/note_actions';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_NOTE_ERRORS:
      return action.errors;
    case RECEIVE_NOTE:
      return [];
    default:
      return state;
  }
};
