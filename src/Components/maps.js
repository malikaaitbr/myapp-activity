import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    activities: [], // Stockez les activités dans le state
  };

  async componentDidMount() {
    await this.fetchActivities(); // Appel de la fonction pour récupérer les activités
  }

  async fetchActivities() {
    
    const response = await fetch('AIzaSyDRXRCLRW9jVffhgVRq5xhm28BFNcHO32A');
    const data = await response.json();

    this.setState({ activities: data.activities || [] });
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  onInfoWindowClose = () => {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null,
      selectedPlace: null,
    });
  };

  renderMarkers() {
    const { activities } = this.state;

    return activities.map((activity, index) => (
      <Marker
        key={index}
        position={{ lat: activity.lat, lng: activity.lng }}
        onClick={this.onMarkerClick}
        name={activity.name}
        // Ajoutez d'autres propriétés liées à l'activité ici
      />
    ));
  }

  renderInfoWindow() {
    const { selectedPlace } = this.state;

    return (
      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onInfoWindowClose}
      >
        <div>
          <h3>{selectedPlace.name}</h3>
          {/* Ajoutez d'autres informations sur l'activité ici */}
        </div>
      </InfoWindow>
    );
  }

  render() {
    const mapStyles = {
      width: '100%',
      height: '100%',
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 48.858844, lng: 2.294350 }}
      >
        {this.renderMarkers()}
        {this.renderInfoWindow()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDRXRCLRW9jVffhgVRq5xhm28BFNcHO32A',
})(MapContainer);