import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Header from '../js/Header.js';
import Footer from '../js/Footer.js';

import '../css/Projects.css'

import Veox from '../res/img/designs/veox.png';
import IceMonitor from '../res/img/designs/icemonitor.jpg';
import FileEncryptor from '../res/img/designs/file-encryptor.png'
import JacqFrost from '../res/img/designs/jacqfrost.gif';


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
                  <p>Android app</p>

                  <p>Cryptocurrency portfolio tracker</p>

                  <p>Currently in Alpha.</p>
                  <div class="buttons">

                    <div class="viewBtn">
                        <a href="https://github.com/tlarsin/CryptoBalance" target="_blank">GitHub</a>
                    </div>
                  </div>

              </div>
              <div class="right">
                  <img src={Veox} alt={"Veox Android version images"}/>
              </div>
          </div>

          <div class="section">
              <div class="left">
                  <h2>Ice Monitor</h2>
                  <p>Android & iOS app</p>

                  <p>Developed for <a href="http://www.d.umn.edu/~jaustin/" target="_blank">Dr. Jay Austin, </a>
                      Department Head <br />and Professor of Physics at UMD. <br /></p>

                  <p>Closed Beta is available on the App Store <br/>and Google Play Store.</p>

                  <div class="buttons">
                    <div class="viewBtn">
                        <a href="http://www.d.umn.edu/~jaustin/IceMonitor/" target="_blank">View</a>
                    </div>

                  </div>
              </div>
              <div class="right">
                  <img src={IceMonitor} alt={"Ice Monitor Android version images"}/>
              </div>
          </div>

          <div class="section">
              <div class="left">
                  <h2>File Encryptor</h2>
                  <p>ReactJS web application</p>

                  <p>Encrypts/decrypts '.txt' files using the AES  <br /> encrpytion algorithm and a user chosen passphrase.</p>

                  <p>Once file is encrypted/decrypted the file <br /> is directly downloaded with extension '.encrypted'<br/>
                        if encrypted or '.txt' if not.</p>
                  <div class="buttons">
                    <div class="viewBtn">
                        <a href="https://github.com/tlarsin/file-encryptor" target="_blank">GitHub</a>
                    </div>
                  </div>
              </div>
              <div class="right">
                  <img src={FileEncryptor} alt={"File Encryptor website image"}/>
              </div>
          </div>

          <div class="section botSection">
              <div class="left">
                  <h2>Jacq Frost</h2>
                  <p>Pure HTML & CSS mockup website for Jacq Frost.</p>

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
                  <img src={JacqFrost} alt={"JacqFrost mockup Website"}/>
              </div>
          </div>
      </div>
      <Footer/>
      </div>
    );
  }
}

export default Projects;
