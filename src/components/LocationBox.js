'use strict';

import React  from 'react';

const LocationBox = (props) => {
    // console.log('I am calling from LocationBox', props);
    let election = props.election;
    let address = props.address;
    let pollingHours = props.pollingHours;
    let pollingAddress = props.pollingAddress;


    return(
        <div className= "app informationBox">
            From LocationBox
        </div>
    );

}
export default LocationBox