import Sidebar from './sidebar';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import {createNote} from '../../actions/note_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(opanModal(modal)),
    closeModal: () => dispatch(closeModal()),
    addNewNote: (note) => dispatch((createNote(note)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
