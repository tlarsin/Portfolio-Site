import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../css/Footer.css'

class Footer extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return(
      <div class="footer">
          <div class="info">
              <div class="list">
                  <li><a href="https://github.com/tlarsin" target="_blank">GitHub</a></li>
                  <li><a href="https://www.linkedin.com/in/tristan-larsin-13438774/" target="_blank">LinkedIn</a></li>

                  <li><a href="https://projecteuler.net/profile/tlarsin.png" target="_blank">Project Euler</a></li>
                  <li><a href="https://www.goodreads.com/user/show/60863096-tristan-larsin" target="_blank">Goodreads</a></li>
                  <li><a href="https://medium.com/@tlarsin" target="_blank">Medium</a></li>
              </div>
          </div>
      </div>
    );
  }
}

export default Footer;
