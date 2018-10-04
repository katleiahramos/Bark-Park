import React, { Component }from 'react'


// import Map from '../components/Map'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    currentLocation: {
      lat: 41.936149,
      lng: -87.656576
    },
  };

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(pos => {
      this.setState({
        currentLocation: {lat: pos.coords.latitude, lng: pos.coords.longitude}
      })
    })
  }




  

  renderMarkers = () => {
    return this.props.parks.map(park => {
      return (
      <Marker 
        key={park.id}
        title={`${park.name}`}
        name={`${park.name}`}
        onClick={this.onMarkerClick}
        position={{ lat: parseFloat(park.lat), lng: parseFloat(park.long)}}>
      </Marker>);
    })
  }



  render() {
    const style = {
      width: '100%',
      height: '100%'
    }
    return (
      <Map
        google={this.props.google}
        style={style}
        center={this.state.currentLocation}
        zoom={13}
        onClick={this.onMapClicked}
      >

        {this.renderMarkers()}

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