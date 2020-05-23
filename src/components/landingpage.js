import React, {Component} from 'react';
import {Grid ,Cell} from 'react-mdl';
import Particles from 'react-particles-js';

const particlesOptions = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      },
      move:{
        enable: true,
        speed:15,
      } 
    },
    interactivity:{
      detect_on:'canvas',
      events:{
          onhover:{
            enable:true,
            mode:'grab'
        }
      }
    }
  }

class Landing extends Component{
    render(){
        return(
            <div className={{width: '100%' , margin: 'auto'}}>
               <div>
               <Particles className="particles" params={particlesOptions}/>
               <Grid className="landing-grid">
                    
                    <Cell col={12}>
                        <img 
                            //src="https://i.ya-webdesign.com/images/avatar-png-icon-6.png"
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="myavatar"
                        className="myavatar-img"
                        />
                        <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML5/CSS3 || Bootstrap || JavaScript || ReactJS || NodeJS || ExpressJS || MongoDB</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* instagram */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>

          {/* facebook */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
          </a>

          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter-square" aria-hidden="true" />
          </a>


        </div>
            </div>
                    </Cell>
                </Grid>

               </div>
               
            </div>
        )
    }
}



export default Landing;