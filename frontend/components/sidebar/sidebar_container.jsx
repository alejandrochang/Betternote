import Sidebar from './sidebar';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id,
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: (id) => dispatch(logout(id)),
    openModal: (modal) => dispatch(opanModal(modal)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
