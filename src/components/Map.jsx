import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import '../components/cssFiles/map.css';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const turkey = { lng: 27.88701268 , lat: 37.14690411 };
  const [zoom] = useState(11);
  maptilersdk.config.apiKey = 'yBu7eZT8Jnq0q7Y5cCjY';

  useEffect(() => {
    if (map.current) return; 
  
    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: "deed4c4b-3938-4b17-9609-b894ca13cc2f",
      center: [turkey.lng, turkey.lat],
      zoom: zoom
    });
  
    map.current.on('load', function () {
      map.current.addSource('lines', {
        'type': 'geojson',
        'data': {
          "type": "FeatureCollection",
          "name": "Path Test",
          "features": [
            { "type": "Feature", "properties": { "Name": "Line 1", "color": "#ff0000" }, "geometry": { "type": "LineString", "coordinates": [ [ 27.8908299, 37.1600766 ], [ 27.8929757, 37.1592216 ], [ 27.8944348, 37.156588 ], [ 27.8947781, 37.1528598 ], [ 27.8955077, 37.15156 ], [ 27.8962801, 37.1501576 ], [ 27.8962372, 37.1469764 ] ] } },
            { "type": "Feature", "properties": { "Name": "Line 2", "color": "#00ff00" }, "geometry": { "type": "LineString", "coordinates": [ [ 27.8982113, 37.1495419 ], [ 27.896881, 37.1530308 ], [ 27.8958081, 37.1538175 ], [ 27.8912161, 37.1560408 ] ] } },
            { "type": "Feature", "properties": { "Name": "Line 3", "color": "#0000ff" }, "geometry": { "type": "LineString", "coordinates": [ [ 27.8950356, 37.1600766 ], [ 27.895336, 37.1571695 ], [ 27.895851, 37.1547068 ], [ 27.8982113, 37.1530308 ], [ 27.8994988, 37.1499523 ], [ 27.898383, 37.1480026 ] ] } }
          ]
        }
      });
      map.current.addLayer({
        'id': 'lines',
        'type': 'line',
        'source': 'lines',
        'paint': {
          'line-width': 3,
          'line-color': ['get', 'color']
        }
      });
    });
  }, [turkey.lng, turkey.lat, zoom]);
  
  
  return (
    <div className="map-wrap" style={{ position: 'absolute', bottom: 0, right: 0, height: 740, width: '49%', padding: 5, marginRight: 10 }}>
      <div ref={mapContainer} className="map" />
    </div>
  );
}























