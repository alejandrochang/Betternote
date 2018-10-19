import { CURRENT_NOTE, RECEIVE_NOTES, CLOSE_CURRENT_NOTE, CHANGE_NOTE } from '../../actions/note_actions';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';


const currentNoteReducer = (state = null, action) => {
  switch (action.type) {
    case CURRENT_NOTE:
      return action.currentNote;
    case CLOSE_CURRENT_NOTE:
      return null;
    case CHANGE_NOTE:
      return action.id;
    case LOGOUT_CURRENT_USER:
      return null;
    case RECEIVE_NOTES:
      return Object.keys(action.notes)[0];
    default:
      return state;
  }
}


export default currentNoteReducer;
