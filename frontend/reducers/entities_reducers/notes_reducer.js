import { RECEIVE_NOTE, RECEIVE_NOTES, DELETE_NOTE } from '../../actions/note_actions';
import {merge} from 'lodash';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NOTES:
      return merge({}, state, action.notes);
    case RECEIVE_NOTE:
      return merge({}, state, {[action.note.id]: action.note});
    case DELETE_NOTE:
      let newState = merge({}, state);
      delete newState[action.noteId];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
