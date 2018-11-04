import React, { Component } from 'react';
import MainContentBlock from "./MainContentBlock";
const MAPS_API = 'https://maps.googleapis.com/maps/api/geocode/json?';
const API_KEY= process.env.REACT_APP_API_KEY;
//https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyBPOCuoJJOWqcLUyuMgbdum8lskulXjqe8

class DataFetch extends Component {
    constructor(props) {
        super(props);

        this.state = {
           address: null,
        }
    }

    componentDidMount(){

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

                        let pollingLocation = data.pollingLocations[0].address;
                        let pollingHours = data.pollingLocations[0].pollingHours;

                        this.setState({contests: contests});
                        this.setState({election: election});
                        this.setState({pollingLocations: pollingLocation});
                        this.setState({pollingHours: pollingHours});
                        console.log('this is state', this.state);
                    });

                })
    }

    render () {
        const address = this.state.address;
        return (
            <div>
               <MainContentBlock address={this.state.address} contests={this.state.contests} election={this.state.election} pollingAddress={this.state.pollingLocations} pollingHours={this.state.pollingHours} />
            </div>
        )
    }
}

export default DataFetch;