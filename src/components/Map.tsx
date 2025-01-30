import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [151.2093, -33.8688], // Sydney coordinates
      zoom: 15
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([151.2093, -33.8688])
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <div className="w-full">
      {!mapboxToken && (
        <div className="text-center mb-4">
          <input
            type="text"
            placeholder="Enter your Mapbox public token"
            className="px-4 py-2 border rounded"
            onChange={(e) => setMapboxToken(e.target.value)}
          />
          <p className="text-sm text-gray-500 mt-2">
            Get your token from <a href="https://mapbox.com/" className="text-primary underline" target="_blank" rel="noopener noreferrer">mapbox.com</a>
          </p>
        </div>
      )}
      <div ref={mapContainer} className="w-full h-[400px] rounded-lg shadow-lg" />
    </div>
  );
};

export default Map;