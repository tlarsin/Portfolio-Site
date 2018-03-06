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

        <Link to="/" className='child'>Home</Link>
        <Link to="/Projects" className='child'>Projects</Link>

      </div>
    );
  }
}

export default Header;
