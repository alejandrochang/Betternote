import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearSessionErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user).then(() =>
      this.props.history.push('/main'))
  }

  handleInput(field) {
    return (e) => (
      this.setState({[field]: e.target.value})
    );
  }

  renderErrors2() {
   return(
     <ul>
       {this.props.errors.map((error, i) => (
         <li className="error-container-2" key={`error-${i}`}>
          {error}
        </li>
        ))}
      </ul>
    );
   }

  render() {
    return (
      <div className="background">
        <div className="form-wrapper">
          <div className="wrapper">
            <div className="login-body">
              <div className="login-heading">
                <img className="ever-logo" src="https://cdn6.aptoide.com/imgs/c/b/7/cb7a9d24c7a7dd2ef2a1cb9463240217_icon.png?w=240"/>
                  <span><h1 className="login-title">Betternote</h1></span>
                  <span><h4 className="login-message">Remember everything important.</h4></span>
                  <span className="google-bar">Continue with google
                    <img className="google-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png"/>
                  </span>
                  <h3><span>or</span></h3>
                  <div className="sign-error-container"><span>{this.renderErrors2()}</span></div>
              </div>
              <div className="login-form">
                <form className="form-styling" onSubmit={this.handleSubmit}>
                  <label>
                    <input
                      placeholder="Username"
                      onChange={this.handleInput('username')}
                      type="text"
                      value={this.state.username}
                      required/>
                  </label>
                  <label>
                    <input
                      placeholder="Email address"
                      onChange={this.handleInput('email')}
                      type="email"
                      value={this.state.email}
                      required/>
                  </label>
                  <label>
                    <input
                      placeholder="Password"
                      onChange={this.handleInput('password')}
                      type="password"
                      value={this.state.password}
                      required/>
                  </label>
                  <button className="signin-button" onClick={this.handleSubmit}>Sign In</button>
                </form>
                <div>
                <input className="remember-checkbox-2" type="checkbox"/>
                  <p className="remember-message-2">Remember me for 30 days</p>
                </div>
                <span className="reminder-password">Forgot password?</span>
                <span className="word-underlining">Don't have an account?</span>
                <a href="#/" className="create-account-link">Create Account</a>
              </div>
              <div className="context-footer">
              </div>
            </div>
          </div>
        </div>

        <div className="login-footer">
        </div>
      </div>
    )
  }
}
export default LoginForm;
