'use strict';

import React from 'react';
import LocationBox from './LocationBox';
import IssueContainer from './IssueContainer';

export default function MainContentBlock (props) {
    return(
        <div className="App innerBodyBox">
            <h1>Your Polling Information</h1>
              <LocationBox loading={props.loading} election={props.election} address={props.address} pollingAddress={props.pollingAddress} pollingHours={props.pollingHours}/>
              <IssueContainer loading={props.loading} contests={props.contests}/>
        </div>
      );
    }
  