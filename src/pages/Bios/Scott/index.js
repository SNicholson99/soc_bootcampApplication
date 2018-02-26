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

class Scott extends Component {
  render () {
    return (
        <div>
          <Bio
            name="Scott"
            website="under construction"
            github="https://github.com/SNicholson99"
            introduction="Aged 18, Scott has recently completed sixth form and decided he didn't want to spend another 3 years
             in education at university. So instead he's diving head-first into the world of tech!"
            main={`"My main technical strengths revolve around front-end development; I have developed a particular interest in
             React, CSS and animations!"`}
            conclusion="Scott has recently taken up a job-offer at MedStars (Birmingham), looking forward to
             see where his career in tech can take him." />
        </div>
    )
  }
}

export default Scott;
