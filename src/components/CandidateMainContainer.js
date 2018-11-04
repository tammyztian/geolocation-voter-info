'use strict';

import React, { Component } from 'react';
import Candidates from './Candidates';

class CandidateMainContainer extends Component {
    render () {
    return(
    <div className= "app">
    From CandidateMainContainer
    <Candidates/>
    </div>
    );
}
}
export default CandidateMainContainer