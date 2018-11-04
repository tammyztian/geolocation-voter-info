'use strict';

import React  from 'react';

const LocationBox = (props) => {
    //console.log('I am calling from LocationBox', props);
    let election = props.election

    let address = props.address;
    let pollingHours = props.pollingHours;
    let pollingAddress = props.pollingAddress;


    console.log(pollingAddress);



    console.log(election);


        if (props.loading === true) {
            return <div>Loading...</div>
        }

        return(
        <div className= "app informationBox">
            From LocationBox
            
            <div className='address-container'>
                Polling information for:
                <br/>
                {address}
            </div>


            <div className='election'>
                {election}
            </div>


            <div className='polling-container'>
                Vote here:{pollingAddress}
            </div>
            
        </div>
        
    );

}
export default LocationBox