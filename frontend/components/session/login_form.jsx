import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Log In</h1>
          <label> Username
            <input
              onChange={this.handleInput('username')}
              type="text"
              value={this.state.username}/>
          </label>
          <label> Password
            <input
              onChange={this.handleInput('password')}
              type="password"
              value={this.state.password}/>
          </label>
          <label> Email
            <input
              onChange={this.handleInput('email')}
              type="email"
              value={this.state.email}/>
          </label>
          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </div>
    )
  }
}
export default LoginForm;
