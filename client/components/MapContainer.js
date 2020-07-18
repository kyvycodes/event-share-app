import React, {Component} from 'react'
import LocationPicker from 'react-location-picker'
import geocoderAPIKey from '../config/keys_prod'

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
    this.handleLocationChange = this.handleLocationChange.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${
          nextProps.address
        }&key=${geocoderAPIKey} `
      )
        .then(response => response.json())
        .then(responseJson => {
          this.setState({position: responseJson.results[0].geometry.location})
        })
        .catch(err => {
          console.log('err', err)
        })
    }
  }
  handleLocationChange() {}
  render() {
    return (
      <div>
        <h1>{this.state.address}</h1>
        <div>
          <LocationPicker
            containerElement={<div style={{height: '100%'}} />}
            mapElement={<div style={{height: '400px'}} />}
            defaultPosition={this.state.position}
            onChange={this.handleLocationChange}
          />
        </div>
      </div>
    )
  }
}
export default MapContainer
