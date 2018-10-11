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
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
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
    return
    <div>
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>
        <label> Username
          <input onChange={this.handleInput('username')} type="text" value={this.state.username}>
        </label>
        <label> Password
          <input onChange={this.handleInput('password')} type="password" value={this.state.password}>
        </label>
        <label> Email
          <input onChange={this.handleInput('email')} type="email" value={this.state.email}>
        </label>
        <input type="submit" value='Sign Up' />
      </form>
    </div>
  }
}
export default SignupForm;
