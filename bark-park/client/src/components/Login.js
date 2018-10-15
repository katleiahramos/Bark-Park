import React, { Component } from 'react';
import { Input, Button } from "react-materialize";
import { connect } from 'react-redux';
import { loginUser } from '../actions/userActions'
import { Redirect } from 'react-router-dom';

class Login extends Component {
    state = {

        username: "",
        password: "",
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        const loginParams = { username: this.state.username, password: this.state.password }
        this.props.loginUser(loginParams)
            .then(() => this.setState({
                username: "",
                password: ""
            }))
        // .then(user => {
        //     localStorage.setItem("jwtToken", user.jwt)
        //     // import to set state here so it rerenders component to make the redirect 

        // })



    }



    render() {
        // TODO: handle incorrect username/password
        if (localStorage.getItem("jwtToken") !== "undefined" && localStorage.getItem("jwtToken") !== null) {
            return <Redirect to="/app" />
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
                        /><br></br>
                        <Button node="a" href="/">Back</Button>
                        <Button type="submit" icon="">Submit</Button>
                    </form>
                </div>
            )
        }


    }
}

// const mapStateToProps = state => {
//     return {
//         loggedIn: state.userReducer.loggedIn,
//         currentUser: state.userReducer.currentUser
//     }
// }
const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (loginParams) => dispatch(loginUser(loginParams))
    }
}

export default connect(null, mapDispatchToProps)(Login)



