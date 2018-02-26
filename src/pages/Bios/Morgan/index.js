import React, {Component} from 'react';

import '../Bios.css';

const Bio = props => (
  <div className="bioContainer">
    <h1 className="bioName title">{`${props.name}`}</h1>
    <img className="bioAvatar" src={`/cohort1_avatars/${props.name}.png`} alt={`${props.name} Avatar`} />
    <a href={`${props.website}`} rel="noopener noreferrer" target="_blank"><h3 className="bioWebsite subheading">{`${props.name}'s Website`}</h3></a>
    <a href={`${props.github}`} rel="noopener noreferrer" target="_blank"><h3 className="bioGithub subheading">{`${props.name}'s Github`}</h3></a>
    <h4 className="bioIntroduction subheading">{`${props.introduction}`}</h4>
    <h4 className="bioMain subheading">{`${props.main}`}</h4>
    <h4 className="bioConclusion subheading">{`${props.conclusion}`}</h4>
  </div>
);

class Morgan extends Component {
  render () {
    return (
      <div>
        <Bio
          name="Morgan"
          website="http://www.google.com"
          github="https://github.com"
          introduction="introduction"
          main="main"
          conclusion="conclusion" />
      </div>
    )
  }
}

export default Morgan;
