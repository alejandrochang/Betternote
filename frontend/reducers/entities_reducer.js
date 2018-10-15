import { combineReducers } from 'redux';
import users from './users_reducer';
import notes from './entities_reducers/notes_reducer';

export default combineReducers({
  users,
  notes,
});
