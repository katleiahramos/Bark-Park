import React, { Component } from 'react';
import { Input, Button } from "react-materialize";
import { connect } from 'react-redux';
import { loginUser } from '../actions/userActions'
import {Redirect } from 'react-router-dom';

class Login extends Component {
    state = {

        username: "",
        password: "",
    }

    handleOnChange = (event)=> {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        const loginParams = { username: this.state.username, password: this.state.password }
        loginUser(loginParams)
            .then(user => {
                localStorage.setItem("jwtToken", user.jwt)
            })
        // const loginParams = {username: this.state.username , password: this.state.password}
        // const body = JSON.stringify(loginParams)
        // fetch("/api/login", {
        //     method: 'post',
        //     body: body,
        //     headers: { "Content-type": 'application/json' },
        // })
        //     .then( resp => resp.json())
        //     .then(json => {
        //         console.log(json)
        //     })

        this.setState({
            username: "",
            password: ""
        })
    }



    render() {
        if (localStorage.getItem("jwtToken")) {
            return <Redirect to="/app" />
        } else {
            return (
                <div>
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

                        <Button type="submit" icon="">Submit</Button>
                    </form>
                </div>
            )
        }


    }
}

const mapDispatchToProps = (dispatch) => {
    // return {
    //     login: (username, password) => dispatch(login(username, password))
    // }
}

export default connect(null, mapDispatchToProps)(Login)



