import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import '../components/cssFiles/map.css';

export default function Map({ coordinatesData }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const turkey = { lng: 27.88701268, lat: 37.14690411 };
  const [zoom] = useState(11);
  maptilersdk.config.apiKey = 'yBu7eZT8Jnq0q7Y5cCjY';

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
            data: coordinatesData
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
    <div className="map-wrap" style={{ position: 'absolute', bottom: 0, right: 0, height: 740, width: '49%', padding: 5, marginRight: 10 }}>
      <div ref={mapContainer} className="map" />
    </div>
  );
}
