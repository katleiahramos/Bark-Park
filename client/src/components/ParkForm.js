import React, { Component } from "react";

import { Input, Button} from "react-materialize";

class ParkForm extends Component {

  state = {
    name: this.props.name || "",
    address: this.props.address || "",
  };

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    // TODO:adding validation

    if (this.props.updatePark) {
      const newPark = {...this.state, count: this.props.oldPark.count, id: this.props.oldPark.id}
      this.props.updatePark(newPark)
    } else {
      this.props.addPark(this.state);
      this.setState({
        name: "",
        address: ""
      });
    }
  };

  render() {
    return (
        <form onSubmit={this.handleOnSubmit}>
          <Input
            s={6}
            type="text"
            label="Park Name"
            name="name"
            onChange={this.handleOnChange}
            value={this.state.name}
          />

          <Input
            s={6}
            type="text"
            label="Address"
            onChange={this.handleOnChange}
            name="address"
            value={this.state.address}
          />

          <Button type="submit" icon="">Submit</Button>
        </form>

    );
  }
}

export default ParkForm;
