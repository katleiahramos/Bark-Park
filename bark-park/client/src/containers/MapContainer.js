import React, { Component }from 'react'
import { GoogleApiWrapper } from 'google-maps-react';
import Geocode from "react-geocode";

import Map from '../components/Map'



export class MapContainer extends Component {

  getGeoCode = () => {
    Geocode.setApiKey("AIzaSyBVugmujTPCHIqrUrOqE4hrGSxj6eWoSY0")
    Geocode.fromAddress("N Lake Shore Dr & Lake Shore Drive Dr, Chicago, IL 60657").then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
      },
      error => {
        console.error(error);
      }
    );
  }

  componentDidMount() {
    if (this.props.centerAroundCurrentLocation) {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                const coords = pos.coords;
                this.setState({
                    currentLocation: {
                        lat: coords.latitude,
                        lng: coords.longitude
                    }
                })
            })
        }
    }
    this.loadMap();
  }


  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    return (
      <div style={style} className="">
        <Map google={this.props.google} />
      </div>
    );
  }
}


 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBVugmujTPCHIqrUrOqE4hrGSxj6eWoSY0")
})(MapContainer)