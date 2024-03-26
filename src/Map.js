import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './mapbox-gl.css';
import eventData from './event_data.json';

function Map() {
  const [map, setMap] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [showResultsPopup, setShowResultsPopup] = useState(false);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW1hbm5pbm85MiIsImEiOiJjbHRxdTIxMmQwYWJyMmptb2V0b2I5N2s0In0.Gi41GFW13BHS4BCY3psEqQ'; // API KEY HERE

    const newMap = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/amannino92/cltw0qns6010c01pb657hagns', // Updated Mapbox style URL
      center: [-3.0937, 12.0489], // starting position [lng, lat]
      zoom: 2.4, // starting zoom
      pitch: 35, // starting pitch
      bearing: 0, // starting bearing
    });

    newMap.on('load', () => {
      // Add markers and popups for each event
      eventData.eventData.forEach(event => {

        const markerWrapper = document.createElement('div');
        markerWrapper.className = 'marker-wrapper';

        const markerElement = document.createElement('div');
        markerElement.className = 'custom-marker';

        // Create a marker and bind pop-up to it
        const marker = new mapboxgl.Marker(markerElement)
          .setLngLat(JSON.parse(event.coordinates)) // Convert coordinates string to array
          .addTo(newMap);

        // Create pop-up content
        const popupContent = `<div>
          <h3>${event.show}</h3>
          <p class="label">Date:</p><p>${event.date}</p>
          <p class="label">Venue:</p><p>${event.venue}</p>
          <p class="label">Location:</p><p>${event.location}</p>
          <p class="label">Attendance:</p><p>${event.attendance}</p>
          <p><a href="${event.wikipage}" target="_blank">*Wikipedia*</a></p>
          <img src="${event.poster_url}" alt="Event Poster" style="width:160px">
        </div>`;


        // Add click event listener to zoom in on marker and display popup
        markerElement.addEventListener('click', () => {
          newMap.flyTo({
            center: JSON.parse(event.coordinates), // Zoom to the marker's coordinates
            zoom: 10, // Adjust the zoom level as needed
            essential: true, // Indicates that this animation is essential and should not be interrupted
            duration: 1000
          });
          const popup = new mapboxgl.Popup({ offset: 30 }).setHTML(popupContent);
          marker.setPopup(popup);
          popup.addTo(newMap);
        });
      });

      newMap.addControl(new mapboxgl.NavigationControl());

      // Disable default double click zoom behavior
      newMap.doubleClickZoom.disable();

      setMap(newMap); // Save the map instance in state
    });

    // Add double-click event listener to zoom out when clicking away from markers
    newMap.on('dblclick', () => {
      newMap.flyTo({
        center: [-20.0937, 12.0489], // Zoom back to the initial center
        zoom: 2.4, // Zoom back to the initial zoom level
        pitch: 35,
        essential: true, // Indicates that this animation is essential and should not be interrupted
        duration: 1000
      });
    });

    return () => newMap.remove(); // Clean up on unmount
  }, []);

  const handleSearch = () => {
    // Perform search logic here
    const filteredEvents = eventData.eventData.filter(event => {
      // Convert all values to lowercase for case-insensitive search
      const showMatch = event.show.toLowerCase().includes(searchTerm.toLowerCase());
      const dateMatch = event.date.toLowerCase().includes(searchTerm.toLowerCase());
      const venueMatch = event.venue.toLowerCase().includes(searchTerm.toLowerCase());
      const locationMatch = event.location.toLowerCase().includes(searchTerm.toLowerCase());
      return showMatch || dateMatch || venueMatch || locationMatch;
    });
    setSearchResults(filteredEvents);
    setShowResultsPopup(true);
  };

  const closeResultsPopup = () => {
    setShowResultsPopup(false);
  };

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '95vh' }}></div>
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="searchInput"
        />
        <button onClick={handleSearch} className="searchButton">Search</button>
      </div>
      {showResultsPopup && (
        <div className="searchResultsPopup">
          <div className="searchResultsContent" onClick={(e) => e.preventDefault()}>
            <button className="closeButton" onClick={closeResultsPopup}>x</button> {/* Close button */}
            <h2>Search Results:</h2>
            <ul>
              {searchResults.map((event, index) => (
                <li key={index}>
                  <p><strong>Show:</strong> {event.show}</p>
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Venue:</strong> {event.venue}</p>
                  <p><strong>Location:</strong> {event.location}</p>
                  <p><a href={event.wikipage} target="_blank" rel="noopener noreferrer">Wikipedia</a></p>
                </li>
              ))}

            </ul>
          </div>
        </div>
      )}


    </div>
  );
}

export default Map;
