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
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      .then(() => {console.log(this.props)
        this.props.history.push('/main')}
    )
  }

  handleInput(field) {
    return (e) => (
      this.setState({[field]: e.target.value})
    );
  }

  handleDemo(e) {
    e.preventDefault();
    this.props
    .login({username: "demo-user", password: "demo12345", email: "demo@gmail.com"})
    .then(() => this.props.history.push("/main"));
  }

  render() {
    return (
      <div className="form-only">
        <div className="animated-button">
          <button className="demo-button hvr-pulse" id="demo-user" onClick={this.handleDemo}>
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
          <input className="sign-up-button" type="submit" value="Create Account"/>
          <input class="remember-checkbox" type="checkbox"/>
            <p className="remember-message">Remember me for 30 days</p>
          </div>
        </form>
      </div>
    );
  }
}
export default SignupForm;
