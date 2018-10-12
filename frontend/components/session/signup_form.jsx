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
      <div className="form-only">
        <div className="animated-button">
          <button className="demo-button">
            <span>Sign In as Demo User</span>
          </button>
        </div>

        <form className="session-form" onSubmit={this.handleSubmit}>
          <div>
            <h3 className="or-container">
              <span className="or-span">or</span>
            </h3>
          </div>

          <label id="username">
            <input
              for="username"
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleInput('username')}
              />
          </label>
          <label id="password">
            <input
              for="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              />
          </label>
          <label id="password">
            <input
              for="email"
              type="email"
              placeholder="Email address"
              value={this.state.email}
              onChange={this.handleInput('email')}
              />
          </label>
          <div className="create-account">
          <button className="sign-up-button"type="submit" onClick={this.handleSubmit}>Create Account</button>
          </div>
        </form>
      </div>
    );
  }
}
export default SignupForm;
