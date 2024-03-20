import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './mapbox-gl.css';
import eventData from './event_data.json'; // Import JSON data

function Map() {

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW1hbm5pbm85MiIsImEiOiJjbHRxdTIxMmQwYWJyMmptb2V0b2I5N2s0In0.Gi41GFW13BHS4BCY3psEqQ'; // API KEY HERE

    const Map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/amannino92/cltzgb90p019301no819r11x5',
      center: [-100.0937, 41.0489], // starting position [lng, lat]
      zoom: 4.2, // starting zoom
      pitch: 25, // starting pitch
      bearing: 40, // starting bearing
    });

    Map.on('load', () => {
      // Add markers and popups for each event
      eventData.eventData.forEach(event => {
        const coordinates = JSON.parse(event.coordinates); // Parse coordinates from string format
        const marker = new mapboxgl.Marker()
          .setLngLat(coordinates)
          .setPopup(new mapboxgl.Popup({ offset: 25 })
            .setHTML(
              `<div>
                <h3>${event.show}</h3>
                <p>Date: ${event.date}</p>
                <p>Venue: ${event.venue}</p>
                <p>Location: ${event.location}</p>
                <p>Attendance: ${event.attendance}</p>
                <p><a href="${event.wikipage}" target="_blank">Wikipedia</a></p>
                <img src="${event.poster_url}" alt="Event Poster" style="max-width:200px">
              </div>`
            )
          )
          .addTo(Map);
      });

      Map.addControl(new mapboxgl.NavigationControl());

      // Disable default double click zoom behavior
      Map.doubleClickZoom.disable();
    });

    return () => Map.remove(); // Clean up on unmount
  }, []);

  return <div id="map" style={{ width: '100%', height: '95vh' }}></div>;
}

export default Map;
