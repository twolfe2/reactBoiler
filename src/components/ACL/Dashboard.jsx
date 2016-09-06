import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddUser from './AddUser';
import Dialog from 'material-ui/Dialog';
import User from './User';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {
      },
      userGroups: {
        '28e2babc-63dc-422c-8edf-1e38cce46c38': {
          name: 'CBRE',
          users: [],
        },
        'db8d27cd-00b3-471e-ba5e-ef208e137187': {
          name: 'Cushman & Wakefield',
          users: [],
        },
      },
      resource: {
        '95f0b83a-e60c-4056-87b2-7679b13f4c9c': {
          propertyName: 'Trump Tower',
          value: 10000000,
          type: 'Multifamily',
        },
        'b2683dfe-2008-4ca9-8f43-ecef0e4df13c': {
          propertyName: 'Walmart #1023',
          value: 1850000,
          type: 'Retail',
        },
      },
      resourcePermissions: {
        '95f0b83a-e60c-4056-87b2-7679b13f4c9c': {
          canRead: [],
          canWrite: [],
        },
        'b2683dfe-2008-4ca9-8f43-ecef0e4df13c': {
          canRead: [],
          canWrite: [],
        },
      },
      addOpen: false,
    };


    this.addUser = this.addUser.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }
  addUser(name, userGroups = []) {
    const newUser = new User(name, userGroups);
    const id = newUser.userId;
    this.setState({ users: Object.assign({}, this.state.users, { [id]: newUser }) });
    console.log('state', this.state);
  }
  handleClose() {
    this.setState({ addOpen: false });
  }
  handleOpen() {
    this.setState({ addOpen: true });
  }

  render() {
    return (
      <div>
        <h1>React Boiler</h1>
        <FloatingActionButton onClick={this.handleOpen}>
          +
        </FloatingActionButton>
        <AddUser addUser={this.addUser} open={this.state.addOpen} handleClose={this.handleClose}/>
      </div>
    );
  }
}

export default Dashboard;
