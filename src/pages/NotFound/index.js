import React, {Component} from 'react';
import { Link } from "react-router-dom";

import './NotFound.css';

class NotFound extends Component {
  render () {
    return (
      <div className="notFoundContainer">
        <h1 className="notFoundTitle title">Sorry!</h1>
        <h3 className="notFoundReason subheading">The page you were looking for could not be found...</h3>
        <h3 className="notFoundReturn subheading">Please return to the homepage using the button below</h3>
        <Link to="/" className="notFoundButton subheading">Back to Homepage</Link>
        <h4 className="notFoundError">Error No: 404</h4>
      </div>
    )

  }
}

export default NotFound;
