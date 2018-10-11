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



        <form className="session-form" onSubmit={this.handleSubmit}>
          <label id="username">
            <input
              for="username"
              type="text"
              placeholder="Email address or Username"
              value={this.state.username}
              onChange={this.handleInput('username')}
              required/>
          </label>
          <label id="password">
            <input
              for="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInput('password')}/>
          </label>
          <label id="password">
            <input
              for="email"
              type="email"
              placeholder="Email"
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
