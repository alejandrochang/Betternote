import { connect } from "react-redux";
import NavBar from "./navbar";
import { login, receiveErrors } from "../../../actions/session_actions";

const mapStateToProps = (state) => ({
  session: state.session.currentUserId
});

const mapDispatchToProps = dispatch => ({
	login: user => dispatch(login(user)),
  receiveErrors: (errors) => dispatch(receiveErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
