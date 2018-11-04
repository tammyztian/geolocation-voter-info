'use strict';

import React  from 'react';

const LocationBox = (props) => {
    //console.log('I am calling from LocationBox', props);
    let election = props.election;
    let electionDate= props.electionDate;
    let address = props.address;
    let pollingHours = props.pollingHours;
    let pollingAddress = props.pollingAddress;
    let pollingLocationName = props.pollingLocationName;

    // console.log(electionDate);

    // const changehyphen = /-/g;
    // electionDate = electionDate.replace(changehyphen, '/');


    // let readableDate= new Date(electionDate);

    
   // console.log(readableDate);

    console.log(pollingAddress);



    console.log(election);


        if (props.loading === true) {
            return <div>Loading...</div>
        }

        return(
        <div className= "app informationBox">
            <h3>Next Election:</h3>
            
            {/* <div className='address-container'>
                Polling information for:
                <br/>
                {address}
            </div> */}


            <div className='election'>
                {electionDate}
                <br/>
                {election}
            </div>


            <div className='polling-container'>
                {pollingLocationName}
                <br/>
                {pollingAddress}
            </div>
            
        </div>
        
    );

}
export default LocationBox