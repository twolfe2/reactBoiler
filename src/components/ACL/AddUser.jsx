import React, { Component } from 'react';
import { Link } from 'react-router';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    }
    this.addUserClicked = this.addUserClicked.bind(this);
  }
  addUserClicked() {
    this.props.addUser(this.state.userName);
    this.props.handleClose();
    this.setState({ userName: '' });
  }
  render() {
    return (
      <div>
        <Dialog
          title="Add New User"
          modal
          open={this.props.open}
          onRequestClose={this.props.handleClose}
        >
          <TextField
            hintText="Enter a name."
            floatingLabelText="User Name"
            value={this.state.userName}
            onChange={(e) => this.setState({ userName: e.target.value })}
          />
          <RaisedButton
            label="Add User"
            primary
            onClick={this.addUserClicked}
          />

        </Dialog>
      </div>
    );
  }
}

export default AddUser;
