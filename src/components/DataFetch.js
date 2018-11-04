import React, { Component } from 'react';
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
        fetch(`${MAPS_API}latlng=40.714224,-73.961452&key=${API_KEY}`)
            .then(res=>res.json())
            .then(data => this.setState({address: data.results[0].formatted_address}));
    }

    render () {
        const address = this.state.address;
        return (
            <div>
                This is Address {address}.
            </div>
        )
    }
}

export default DataFetch;