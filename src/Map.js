import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl'; 

function Map() {
  useEffect(() => {
    mapboxgl.accessToken = 'ENTER API KEY HERE'; // API KEY HERE
    const mapContainer = document.getElementById('map'); 

    if (!mapContainer) {
      console.error("Container 'map' not found.");
      return;
    }

    const map = new mapboxgl.Map({
      container: mapContainer,
      style: 'mapbox://styles/amannino92/clttcobuk00my01pbfq3z37i5',
      center: [30, 15],
      zoom: 3
    });

    map.addControl(new mapboxgl.NavigationControl());
  }, []);

  return <div id="map" style={{ width: '100%', height: '95vh' }}></div>; 
}

export default Map;
