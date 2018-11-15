import Sidebar from './sidebar';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import {createNote} from '../../actions/note_actions';
import { fetchNotes } from '../../actions/note_actions';


const mapStateToProps = state => {
  // console.log(state);
  return {
    currentUser: state.session.currentUser,
    modal: state.ui.modal,
    notes: state.entities.notes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(opanModal(modal)),
    closeModal: () => dispatch(closeModal()),
    addNewNote: (note) => dispatch((createNote(note))),
    fetchNotes: () => dispatch(fetchNotes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
