import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import './App.css';
import Landing from './../../pages/Landing';
import Characters from './../../pages/Characters';
import NotFound from './../../pages/NotFound';

import Chris from './../../pages/Bios/Chris';
import Nicola from './../../pages/Bios/Nicola';
import Ashleigh from './../../pages/Bios/Ashleigh';
import Ben from './../../pages/Bios/Ben';
import Christopher from './../../pages/Bios/Christopher';
import Clare from './../../pages/Bios/Clare';
import Doug from './../../pages/Bios/Doug';
import Hamza from './../../pages/Bios/Hamza';
import Jennifer from './../../pages/Bios/Jennifer';
import Julien from './../../pages/Bios/Julien';
import Leigh from './../../pages/Bios/Leigh';
import Lily from './../../pages/Bios/Lily';
import Matthew from './../../pages/Bios/Matthew';
import Morgan from './../../pages/Bios/Morgan';
import Nazia from './../../pages/Bios/Nazia';
import Nick from './../../pages/Bios/Nick';
import Pete from './../../pages/Bios/Pete';
import Scott from './../../pages/Bios/Scott';
import Sharon from './../../pages/Bios/Sharon';
import Sina from './../../pages/Bios/Sina';
import Victoria from './../../pages/Bios/Victoria';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/characters" component={Characters} />
          <Route path="/chris" component={Chris} />
          <Route path="/nicola" component={Nicola} />
          <Route path="/ashleigh" component={Ashleigh} />
          <Route path="/ben" component={Ben} />
          <Route path="/christopher" component={Christopher} />
          <Route path="/clare" component={Clare} />
          <Route path="/doug" component={Doug} />
          <Route path="/hamza" component={Hamza} />
          <Route path="/jennifer" component={Jennifer} />
          <Route path="/julien" component={Julien} />
          <Route path="/leigh" component={Leigh} />
          <Route path="/lily" component={Lily} />
          <Route path="/matthew" component={Matthew} />
          <Route path="/morgan" component={Morgan} />
          <Route path="/nazia" component={Nazia} />
          <Route path="/nick" component={Nick} />
          <Route path="/pete" component={Pete} />
          <Route path="/scott" component={Scott} />
          <Route path="/sharon" component={Sharon} />
          <Route path="/sina" component={Sina} />
          <Route path="/victoria" component={Victoria} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
