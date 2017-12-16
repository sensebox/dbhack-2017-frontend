import * as React from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css'

mapboxgl.accessToken = 'pk.eyJ1IjoiZmVsaXhhZXRlbSIsImEiOiJjajl5OWRib2c4Y3I3MzN0NG5qb3N4ZDNhIn0.ZSVnG5S1oXz2fXDoboV_RA'

class Map extends React.Component {
    map
    state = {
        viewport: {
            width: window.innerWidth,
            height: window.innerHeight,
            latitude: 50,
            longitude: 8,
            zoom: 1
        },
        crashes: {}
    }

    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/light-v9',
            center: [this.state.viewport.longitude, this.state.viewport.latitude],
            zoom: this.state.viewport.zoom
        });
        this.map.on('load', () => {
            this.map.addLayer({
                "id": "route",
                "type": "line",
                "source": {
                    "type": "geojson",
                    "data": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                this.props.start,
                                this.props.destination
                            ]
                        }
                    }
                },
                "layout": {
                    "line-join": "round",
                    "line-cap": "round"
                },
                "paint": {
                    "line-color": "red",
                    "line-width": 8
                }
            });
            this.map.fitBounds([this.props.start,
                this.props.destination])
        });
    }

    render() {
        return (
            <div className='map' ref={el => this.mapContainer = el} />
        )
    }
}

export default Map