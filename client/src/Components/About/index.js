import React, {useState} from "react";
import {Jumbotron} from 'react-bootstrap';
import { Flipper, Flipped } from 'react-flip-toolkit';
import './style.css';


const About = () => {
  
  const [fullScreen, setFullScreen] = useState(false);
  toggleFullScreen = () => {
    this.setState(prevState => ({
      fullScreen: !prevState.fullScreen
    }));
  };
    return (
        <>
       <Jumbotron className="jHeight backAt" id="section1">
       <Flipper flipKey={this.state.fullScreen}>
        <Flipped flipId="square">
          <div
            className={this.state.fullScreen ? "full-screen-square" : "square"}
            onClick={this.toggleFullScreen}
          />
        </Flipped>
      </Flipper>
</Jumbotron>  
       
     </>
    );


}

export default About;