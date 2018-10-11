import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      .then(() => this.props.history.push('/'))
  }

  handleInput(field) {
    return (e) => (
      this.setState({[field]: e.target.value})
    );
  }

  // renderMessage() {
  //   if (this.props.formType === 'login') {
  //
  //   }
  // }


  render() {
    return (
      <div className="session-form">
        <form onSubmit={this.handleSubmit}>
          <label> Username
            <input
              type="text"
              placeholder="Email or username"
              value={this.state.username}
              onChange={this.handleInput('username')}/>
          </label>
          <label> Password
            <input
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleInput('password')}/>
          </label>
          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </div>
    );
  }
}
export default SignupForm;
