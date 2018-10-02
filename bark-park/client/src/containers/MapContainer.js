import React, { Component }from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  render() {
    return (
      <div className="">
        <Map google={this.props.google} zoom={14}>
  
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
  
          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                {/* <h1>{this.state.selectedPlace.name}</h1> */}
              </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBVugmujTPCHIqrUrOqE4hrGSxj6eWoSY0")
})(MapContainer)