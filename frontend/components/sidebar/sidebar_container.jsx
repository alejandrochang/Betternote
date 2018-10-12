import Sidebar from './sidebar';
import {connect} from 'react-redux';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id;
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: id () => dispatch(logout(id)), 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
