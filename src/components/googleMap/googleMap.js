import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class GoogleMap extends Component {

  render() {
    return (
      <div className="map-container">
        <Map google={this.props.google}
                 style={{width: '80%', height:'80%',marginLeft: 'auto',marginRight: 'auto',marginTop:'15px',border:'2px solid #333333'}}
                 zoom={14}
                 center={{
                  lat: this.props.lat,
                  lng: this.props.lon
                }}>
                <Marker
                    position={{lat: this.props.lat, lng: this.props.lon}} />
            </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyC1E_8gldva1_W1yspH1v_i983i70_EcFU')
})(GoogleMap)