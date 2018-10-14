import Sidebar from './sidebar';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: (user) => dispatch(logout(user)),
    openModal: (modal) => dispatch(opanModal(modal)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
