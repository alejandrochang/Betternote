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
          <h2>Sign Up</h2>
          <label> Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}/>
          </label>
          <label> Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}/>
          </label>
          <label> Email
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}/>
          </label>
          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </div>
    );
  }
}
export default SignupForm;
