import React, {Component} from 'react';
import { Link } from "react-router-dom";

import './Landing.css';

class Landing extends Component {
  render () {
    return(
        <div className="landingContainer">
          <h1 className="landingTitle title">Cohort 1</h1>
          <img src="/soc_logo.png" className="landingLogo" alt="School of Code Logo" />
          <Link to="/characters" className="landingButton subheading">Meet the Cohort!</Link>
        </div>
    )
  }
}

export default Landing;
