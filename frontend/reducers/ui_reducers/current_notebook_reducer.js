import { CURRENT_NOTEBOOK, currentNotebookTitle } from '../../actions/notebook_actions';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';

const currentNotebookReducer = (state = null, action) => {
  switch (action.type) {
    case CURRENT_NOTEBOOK:
      return action.currentNotebookId;
    case currentNotebookTitle:
      return action.currentNotebookTitle;
    case LOGOUT_CURRENT_USER:
      return null;
    default:
      return state;
  }
}
