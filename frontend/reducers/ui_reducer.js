import { combineReducers } from 'redux';
import modalReducer from './ui_reducers/modal_reducer';
import currentNoteReducer from './ui_reducers/current_note_reducer';

export default combineReducers({
  modal: modalReducer,
  currentNote: currentNoteReducer
});
