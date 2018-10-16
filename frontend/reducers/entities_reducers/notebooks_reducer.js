import {
  RECEIVE_NOTEBOOKS,
  RECEIVE_NOTEBOOK,
  DELETE_NOTEBOOK
} from '../../actuibs/notebooks_action';

export default (oldState = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_NOTEBOOKS:
      return merge({}, oldState, action.notebooks);
    case RECEIVE_NOTEBOOK:
      return merge({}, oldState, {[action.notebook.id]: action.notebook});
    case DELETE_NOTEBOOK:
      return;
    default:
      return oldState;
  }
};
