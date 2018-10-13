import { OPEN_MODAL, CLOSE_MODAL } from '../../actions/modal_actions';

const modalReducer = (state = null, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal; // when we want the modal open
    case CLOSE_MODAL:
      return null; // when we want the modal closed
    default:
      return state;
  }
}

export default modalReducer;
