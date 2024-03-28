import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";



export default function Map({ coordinatesData }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const turkey = { lng: 27.88701268, lat: 37.14690411 };
  const [zoom] = useState(11);
  maptilersdk.config.apiKey = 'yBu7eZT8Jnq0q7Y5cCjY';


console.log("Map tetiklendi:", coordinatesData);


  useEffect(() => {
    if (mapContainer.current && !map.current) {
      map.current = new maptilersdk.Map({
        container: mapContainer.current,
        style: "deed4c4b-3938-4b17-9609-b894ca13cc2f",
        center: [turkey.lng, turkey.lat],
        zoom: zoom
      });

      map.current.on('load', function () {
        if (coordinatesData) {
          map.current.addSource('lines', {
            type: 'geojson',
            'data': {
              "type": "FeatureCollection",
              "name": "Path Test",
              "features": [
              { "type": "Feature", 
              "properties": { "Name": "Line" },
               "geometry": { "type": "LineString", 
              "coordinates":  [ [ 27.8950356, 37.1600766 ], [ 27.895336, 37.1571695 ], [ 27.895851, 37.1547068 ], [ 27.8982113, 37.1530308 ], [ 27.8994988, 37.1499523 ], [ 27.898383, 37.1480026 ] ] } },
               ]
              }
      });
          
          map.current.addLayer({
            id: 'lines',
            type: 'line',
            source: 'lines',
            paint: {
              'line-width': 3,
              'line-color': ['get', 'color']
            }
          });
        }
      });
    }

  }, [turkey.lng, turkey.lat, zoom, coordinatesData]); 

  return (
    <div className="map-wrap"  >
      <div  style={{ height: 720, width: '98%', padding: 5, border: '2px solid black', borderRadius: 20, marginLeft: 5, marginRight: 5, marginTop: 8 }}
       ref={mapContainer} className="map" />
    </div>
  );
}
