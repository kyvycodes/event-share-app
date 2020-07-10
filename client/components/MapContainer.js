import React, {Component} from 'react'
import LocationPicker from 'react-location-picker'

/* Default position */
const defaultPosition = {
  lat: 40.8322224,
  lng: -73.9009961
}

class MapContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      address: ' ',
      position: {
        lat: 0,
        lng: 0
      }
    }

    // latitude: 40.8322224
    // longitude: -73.9009961

    // Bind
    this.handleLocationChange = this.handleLocationChange.bind(this)
  }

  handleLocationChange({position, address, places}) {
    console.log('POSITION', position)

    // Set new location
    this.setState({position, address})
  }

  render() {
    return (
      <div>
        <h1>{this.state.address}</h1>
        <div>
          <LocationPicker
            containerElement={<div style={{height: '100%'}} />}
            mapElement={<div style={{height: '400px'}} />}
            defaultPosition={defaultPosition}
            onChange={this.handleLocationChange}
          />
        </div>
      </div>
    )
  }
}
export default MapContainer
