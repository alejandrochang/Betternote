import { CURRENT_NOTE, CLOSE_CURRENT_NOTE } from '../../actions/note_actions';
import { LOGOUT_CURREN_USER } from '../../actions/session_actions';


const currentNoteReducer = (state = null, action) => {
  switch (action.type) {
    case CURRENT_NOTE:
      return action.currentNote;
    case CLOSE_CURRENT_NOTE:
      return null;
    case LOGOUT_CURREN_USER:
      return null;
    default:
      return state;
  }
}


export default currentNoteReducer;
