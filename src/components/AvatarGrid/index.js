import React, {Component} from 'react';
import { Link } from "react-router-dom";

import './AvatarGrid.css';

const Avatar = props => (
  <Link to={`/${props.name}`}>
    <img
      src={`/cohort1_avatars/${props.name}.png`}
      className="avatar"
      alt={`${props.name} Avatar`}
    />
  </Link>
);

class AvatarGrid extends Component {
  render () {
    return(
      <div className="avatarContainer">
        <Avatar name="ashleigh" />
        <Avatar name="ben" />
        <Avatar name="christopher" />
        <Avatar name="clare" />
        <Avatar name="doug" />
        <Avatar name="hamza" />
        <Avatar name="jennifer" />
        <Avatar name="julien" />
        <Avatar name="leigh" />
        <Avatar name="lily" />
        <Avatar name="matthew" />
        <Avatar name="morgan" />
        <Avatar name="nazia" />
        <Avatar name="nick" />
        <Avatar name="pete" />
        <Avatar name="scott" />
        <Avatar name="sharon" />
        <Avatar name="sina" />
        <Avatar name="victoria" />
        <Avatar name="nicola" />
        <Avatar name="chris" />
      </div>
    )
  }
}

export default AvatarGrid;
