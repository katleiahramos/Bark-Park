import React, { Component } from "react";
import { Input, Button } from "react-materialize";
import { connect } from "react-redux";
import { loginUser } from "../actions/userActions";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = async event => {
    event.preventDefault();
    const loginParams = {
      username: this.state.username,
      password: this.state.password
    };

    await this.props.loginUser(loginParams);

    // reset state and trigger re-render
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    if (localStorage.getItem("jwtToken")) {
      return <Redirect to="/app" />;
    } else {
      return (
        <div className="Login-Form z-depth-5">
          <h2 className="teal-text">Log In</h2>
          <form onSubmit={this.handleOnSubmit}>
            <Input
              type="text"
              label="Username"
              name="username"
              onChange={this.handleOnChange}
              value={this.state.username}
            />

            <Input
              type="password"
              label="Password"
              onChange={this.handleOnChange}
              name="password"
              value={this.state.password}
            />
            <Button node="a" href="/">
              Back
            </Button>
            <Button type="submit" icon="">
              Submit
            </Button>
          </form>
        </div>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: loginParams => dispatch(loginUser(loginParams))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
