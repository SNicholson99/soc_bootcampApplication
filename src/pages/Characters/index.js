import React, {Component} from 'react';

import './Characters.css';
import AvatarGrid from './../../components/AvatarGrid';

class Characters extends Component {
  render () {
    return(
        <div className="charactersContainer">
          <h2 className="charactersTitle title">Select a Character</h2>
          <AvatarGrid />
        </div>
    )
  }
}

export default Characters;
