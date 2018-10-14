import React, { Component } from 'react';
import { Input, Button } from "react-materialize";
import { connect } from 'react-redux';
import { createUser, loginUser } from "../actions/userActions"
import { Redirect } from 'react-router-dom';

class SignupForm extends Component {
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
        const userParams = { username: this.state.username, password: this.state.password }
        this.props.createUser(userParams)
            .then(()=>{
                this.props.loginUser(userParams)
                .then(() => this.setState({
                    username: "",
                    password: ""
                }))
            })
       

    }



    render() {
        console.log('signup form is rendering...');
        
        // TODO: handle incorrect username/password
        if (localStorage.getItem("jwtToken") !== "undefined" && localStorage.getItem("jwtToken") !== null) {
            
            return <Redirect to="/app" />
        } else {
            return (
                <div className="Login-Form z-depth-5">
                    <h2 className="teal-text">Sign Up</h2>
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


                        <Button type="submit" icon="">Submit</Button>
                    </form>
                </div>
            )
        }


    }
}




const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (userParams) => dispatch(createUser(userParams)),
        loginUser: (loginParams) => dispatch(loginUser(loginParams))
    }
}

export default connect(null, mapDispatchToProps)(SignupForm)



