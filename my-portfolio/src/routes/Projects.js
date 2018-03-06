import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Header from '../js/Header.js';
import Footer from '../js/Footer.js';

import '../css/Projects.css'

import selfie from '../res/img/selfie.JPG';


class Projects extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return(
      <div>
      <Header/>
      <div class="content">
          <div class="contentTop">
              <h2>My Portfolio</h2>
              <p>Projects I have worked on.</p>
              <hr/>
          </div>

          <div class="section">
              <div class="left">
                  <h2>Veox</h2>
                  <p>Android app. </p>
                  <p>Cryptocurrency portfolio tracker. <br />Currently being developed.</p>

                  <div class="buttons">

                    <div class="viewBtn">
                        <a href="https://github.com/tlarsin/CryptoBalance" target="_blank">GitHub</a>
                    </div>
                  </div>

              </div>
              <div class="right">
                  <img src="assets/images/designs/veox.png" alt="Veox Android images"/>
              </div>
          </div>

          <div class="section">
              <div class="left">
                  <h2>Ice Monitor</h2>
                  <p>Android & iOS app.</p>
                  <p>Developed for <a href="http://www.d.umn.edu/~jaustin/" target="_blank">Dr. Jay Austin,</a>
                      Department Head <br />and Professor of Physics at UMD.</p>

                  <div class="buttons">
                    <div class="viewBtn">
                        <a href="http://www.d.umn.edu/~jaustin/IceMonitor/" target="_blank">View</a>
                    </div>

                  </div>
              </div>
              <div class="right">
                  <img src="assets/images/designs/icemonitor.jpg" alt="Ice Monitor Android images"/>
              </div>
          </div>

          <div class="section botSection">
              <div class="left">
                  <h2>Jacq Frost</h2>
                  <p>Mockup website for Jacq Frost.</p>
                  <p>Not affiliated with Jacq Frost in any way. </p>

                  <div class="buttons">
                    <div class="viewBtn">
                        <a href="assets/jacqFrost/index.html">View</a>
                    </div>
                    <div class="viewBtn">
                        <a href="https://github.com/tlarsin/Frozen-Yogurt-Website-Design" target="_blank">GitHub</a>
                    </div>
                  </div>
              </div>
              <div class="right">
                  <img src="assets/images/designs/jacqfrost.gif" alt=""/>
              </div>
          </div>
      </div>
      <Footer/>
      </div>
    );
  }
}

export default Projects;
