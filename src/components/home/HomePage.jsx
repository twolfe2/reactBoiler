import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>React Boiler</h1>
        <Link to="about" className="btn btn-primary">See About</Link>
      </div>
    );
  }
}

export default HomePage;
