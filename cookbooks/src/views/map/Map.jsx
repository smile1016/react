import React, { Component } from 'react'
import {MapContainer} from './Map.style'
export default class Map extends Component {
    render() {
        return (
            <MapContainer>
                <iframe src="/map.html" title="map"></iframe>
            </MapContainer>
        )
    }
}
