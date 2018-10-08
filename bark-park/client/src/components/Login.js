import React, { Component } from 'react'; 
import { Input, Button} from "react-materialize";
import {connect} from 'react-redux';
import { login } from '../actions/parkActions'

class Login extends Component {
    state = {
        email: "",
        username: "",
        password: "", 
    }

    handleOnChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.login(this.state.username, this.state.password)
    }



    render(){
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
                type="text"
                label="E-mail"
                name="email"
                onChange={this.handleOnChange}
                value={this.state.email}
            />

            <Input
               
                type="text"
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

const mapDispatchToProps = (dispatch) => {
 return {
     login: (username, password) => dispatch(login(username, password))
    }
}

export default connect(null, mapDispatchToProps)(Login)



