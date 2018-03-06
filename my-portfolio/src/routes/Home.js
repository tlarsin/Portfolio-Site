import React, { Component } from 'react';
import Header from '../js/Header.js';
import Footer from '../js/Footer.js';

import '../css/Home.css';
import selfie from '../res/img/selfie.JPG';

export default() => (
  <div>
    <Header/>

      <div class="content">

          <div class="contentTop">
            <h2>About Me</h2>
            <p>Get to know me</p>
            <hr/>
          </div>

          <div class="section">
            <img src={selfie} alt={"Selfie"} />
            <div class="aboutMe">
              <p>My name is Tristan Larsin. I am a Senior attending University of Minnesota Duluth. I am majoring in
                 Computer Science and minoring in Mathematics and Computer Engineering. I  will graduate in May of 2018
                 and am currently seeking a full-time position.</p>

              <p>I fell in love with computers when I started designing websites in highschool. In the last few months I
                  have fell in love with Android Development. I am currently working on two apps. One for a Physic's
                  professor here at UMD regarding Ice Physics. The other is a cryptocurrency portfolio tracker.</p>

              <p>In my free time I enjoy watching sports, playing games, hanging out with friends and most things computer related.</p>

            </div>
          </div>

          <div class="section" id="form">
            <span>Please contact me if you are in need of my services.</span>

            <div class="form">
              <form action="form/" method="post">
                <input type="text" name="name" id="name" placeholder="Name"/>
                <input type="text" name="email" placeholder="Email"/>

                <textarea name="comments"  placeholder="Message"></textarea>

                <div class="g-recaptcha" data-sitekey="6LeDfywUAAAAABRDjPk7UDwgUjOHcF7_4_NQxrnu"></div>

                <input type="submit" value="Send" class="submit"/>

              </form>
            </div>
          </div>
      </div>

      <Footer/>
  </div>
);
