import {
  RECEIVE_NOTEBOOK, RECEIVE_NOTEBOOK_ERRORS
} from '../../actions/notebook_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NOTEBOOK:
      return [];
    case RECEIVE_NOTEBOOK_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
