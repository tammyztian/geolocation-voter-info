import React, { Component } from 'react';
import MainContentBlock from "./MainContentBlock";
const MAPS_API = 'https://maps.googleapis.com/maps/api/geocode/json?';
const API_KEY= process.env.REACT_APP_API_KEY;
//https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyBPOCuoJJOWqcLUyuMgbdum8lskulXjqe8

class DataFetch extends Component {
    constructor(props) {
        super(props);

        this.state = {
           loading: false,
        }
    }

    componentDidMount(){
        this.setState({loading:true})

        return fetch(`${MAPS_API}latlng=43.0341686,-87.911936292956912&key=${API_KEY}`)
            .then(res=>res.json())
            .then(data => {
                let address=data.results[0].formatted_address
                this.setState({address: address});
                //this.setState({address: data.results[0].formatted_address}));
                //remove commas from address
                const removecomma = /,/g;
                address = address.replace(removecomma, '');
                //converts spaces into %20
                address=encodeURI(address);
                return address
            })
            //Query into Google's Civic API
            .then(address => {
                let civic_query = `https://www.googleapis.com/civicinfo/v2/voterinfo?key=${API_KEY}&address=${address}`

                return fetch(civic_query, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(res => res.json())
                    .then (data =>{
                        console.log(data)
                        let contests = data.contests;
                        let election = data.election;
                        let electionDate= data.election.electionDay;
                        let pollingLocationName = `${data.pollingLocations[0].address.locationName}`;

                    
                        let pollingLocationAddress= `${data.pollingLocations[0].address.line1} ${data.pollingLocations[0].address.city}, ${data.pollingLocations[0].address.state} ${data.pollingLocations[0].address.zip}`;
                        let pollingHours = data.pollingLocations[0].pollingHours;

                        this.setState({contests: contests});
                        this.setState({election: election.name});
                        this.setState({election: electionDate});
                        this.setState({pollingLocation: pollingLocationAddress});
                        this.setState({pollingLocationName: pollingLocationName})
                        this.setState({pollingHours: pollingHours});
                        //console.log('this is polling location', this.state.pollingLocation);
                        this.setState({loading:false});
                    });

                })
    }

    render () {

        if (this.state.loading === true) {
            return <div>Loading...</div>
        }
        return (
            <div>
               <MainContentBlock 
                loading={this.state.loading} 
                address={this.state.address} 
                electionDate={this.state.electionDate} 
                pollingLocationName={this.state.pollingLocationName} 
                contests={this.state.contests} election={this.state.election} 
                pollingAddress={this.state.pollingLocation} 
                pollingHours={this.state.pollingHours} />
            </div>
        )
    }
}

export default DataFetch;