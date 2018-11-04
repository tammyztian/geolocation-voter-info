'use strict';

import React from 'react';
import LocationBox from './LocationBox';
import IssueContainer from './IssueContainer';

export default function MainContentBlock (props) {
    return(
        <div className="App innerBodyBox">
            <h1>Your Polling Information</h1>
            {/*{console.log('I am calling from MainBlock', props.address)}*/}
              <LocationBox election={props.election} address={props.address} pollingLocations={props.pollingLocations} pollingHours={props.pollingHours}/>
              <IssueContainer contests={props.contests}/>
        </div>
      );
    }
  