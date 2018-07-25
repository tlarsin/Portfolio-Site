import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../css/Header.css'

class Header extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return(
      <div className='top'>
        <h1>Tristan Larsin</h1>

        <Link to="/" className='child' activeClassName="active">Home</Link>
        <Link to="/projects" className='child' activeClassName="active">Projects</Link>
      </div>
    );
  }
}

export default Header;
