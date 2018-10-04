import React, { Component }from 'react'
import Geocode from "react-geocode";


// import Map from '../components/Map'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  // <Marker
  // title={'CHI'}
  // name={'Chicago'}
  // onClick={this.onMarkerClick}
  // position={{ lat: 41.8781, lng: -87.6298 }} />
  
  // convertToLatLong = () => {
  //   Geocode.setApiKey("AIzaSyBVugmujTPCHIqrUrOqE4hrGSxj6eWoSY0");
  //   const markers = this.props.parks.map(park => {
  //     Geocode.fromAddress(`${park.address}`).then(
  //       response => {
  //         const { lat, lng } = response.results[0].geometry.location;
          
  //         <Marker
  //         title={`${park.name}`}
  //         name={`${park.name}`}
  //         onClick={this.onMarkerClick}
  //         position={{ lat: lat, lng: lng }} />
  //       }
  //     )
  //   })




      // error => {
      //   console.log('in error now...')
      //   return ('error');
      // }

  // }


  getMarkers = () => {
    const test = this.props.parks.map(park => { 
    Geocode.setApiKey("AIzaSyBVugmujTPCHIqrUrOqE4hrGSxj6eWoSY0");
    Geocode.fromAddress(`${park.address}`)
    .then( resp => resp.results[0].geometry.location)
    .then( latLong => this.renderMarkers(latLong, park))
    })
    
  }

  renderMarkers = (latLong, park) => {
    return (<Marker title=
      {`${park.name}`}
      name=
      {`${park.name}`}
      onClick=
      {this.onMarkerClick}
      position=
      {{ lat: latLong.lat, lng: latLong.lng }}>
    </Marker>);
  }

  // convertToLatLong = (address) => {
  //   Geocode.setApiKey("AIzaSyBVugmujTPCHIqrUrOqE4hrGSxj6eWoSY0");
  
  //   Geocode.fromAddress(`${address}`).then(
  //     response => {
  //       const { lat, lng } = response.results[0].geometry.location;
        
  //       return (lat,lng);
        
  //     },
  //     error => {
  //       console.log('in error now...')
  //       return ('error');
  //     }
  //   );
  // }

  render() {
    const style = {
      width: '50%',
      height: '50%'
    }
    return (
      <Map
        google={this.props.google}
        style={style}
        initialCenter={{
          lat: 41.8781,
          lng: -87.6298
        }}
        zoom={15}
        onClick={this.onMapClicked}
      >

        {this.getMarkers()}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}



 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBVugmujTPCHIqrUrOqE4hrGSxj6eWoSY0")
})(MapContainer)