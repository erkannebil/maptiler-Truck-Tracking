import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import '../components/cssFiles/map.css';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const tokyo = { lng: 139.753, lat: 35.6844 };
  const [zoom] = useState(14);
  maptilersdk.config.apiKey = 'yBu7eZT8Jnq0q7Y5cCjY';

  useEffect(() => {
    if (map.current) return; 

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [tokyo.lng, tokyo.lat],
      zoom: zoom
    });

  }, [tokyo.lng, tokyo.lat, zoom]);

  return (
    <div className="map-wrap" style={{ position: 'absolute', bottom: 0, right: 0, height: 740, width: '49%', padding: 5, marginRight: 10 }}>
      <div ref={mapContainer} className="map" />
    </div>
  );
}























