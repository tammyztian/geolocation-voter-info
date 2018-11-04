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
            
            {/* <div>
                Polling information for:${address}
            </div>
            <div>
                ${election.name}
            </div>
            <div>  
                Vote here:${pollingAddress.locationName}
                <br/>
                ${pollingAddress.line1}, ${pollingAddress.city}, ${pollingAddress.state}
            </div> */}
            
        </div>
        
    );

}
export default LocationBox