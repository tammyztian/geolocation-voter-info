'use strict';

import React from 'react';
import LocationBox from './LocationBox';
import IssueContainer from './IssueContainer';
import CandidateMainContainer from './CandidateMainContainer';

export default function MainContentBlock (props) {
    return(
        <div className="App innerBodyBox">
        <p>from MainContentBlock</p>
            {console.log('I am calling from MainBlock', props.address)}
          <LocationBox election={props.election} address={props.address} pollingLocation={props.pollingLocations} pollingHours={props.pollingHours}/>
          <IssueContainer contests={props.contests}/>
          <CandidateMainContainer/>
        </div>
      );
    }
  