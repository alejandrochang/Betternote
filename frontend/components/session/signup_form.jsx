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
      .then(() => this.props.history.push('/main'))
  }

  handleInput(field) {
    return (e) => (
      this.setState({[field]: e.target.value})
    );
  }


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
              onChange={this.handleInput('username')}
              required/>
          </label>
          <label id="password">
            <input
              for="password"
              type="password"
              placeholder="Password"
              onChange={this.handleInput('password')}
              required/>
          </label>
          <label id="email">
            <input
              for="email"
              type="email"
              placeholder="Email address"
              onChange={this.handleInput('email')}
              required/>
          </label>
          <div className="terms-services">
            <p>By clicking Create Account, I agree to the <a className="privacy-policy">Terms of Service</a> and <a className="privacy-policy">Privacy Policy</a>.
            </p>

          </div>
          <div className="create-account">
          <button className="sign-up-button"type="submit" onClick={this.handleSubmit}>Create Account</button>
          <input class="remember-checkbox" type="checkbox"/>
            <p className="remember-message">Remember me for 30 days</p>
          </div>
        </form>
      </div>
    );
  }
}
export default SignupForm;
