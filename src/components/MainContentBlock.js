'use strict';

import React from 'react';
import LocationBox from './LocationBox';
import IssueContainer from './IssueContainer';
import CandidateMainContainer from './CandidateMainContainer';

export default function MainContentBlock () {
    return(
        <div className="App innerBodyBox">
        <h1>Your Polling Information</h1>
        
          <LocationBox/>
          <IssueContainer/>
          <CandidateMainContainer/>
        </div>
      );
    }
  