'use strict';

import React from 'react';
import LocationBox from './LocationBox';
import IssueContainer from './IssueContainer';
import CandidateMainContainer from './CandidateMainContainer';

export default function MainContentBlock () {
    return(
        <div className="App innerBodyBox">
        <p>from MainContentBlock</p>
        
          <LocationBox/>
          <IssueContainer/>
          <CandidateMainContainer/>
        </div>
      );
    }
  