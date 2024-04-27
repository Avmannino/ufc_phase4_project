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
    mapboxgl.accessToken = ''; // API KEY HERE

    const newMap = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/amannino92/cltw0qns6010c01pb657hagns',
      center: [-3.0937, 12.0489],
      zoom: 2.4,
      pitch: 35,
      bearing: 0,
    });

    newMap.on('load', () => {

      eventData.eventData.forEach(event => {

        const markerWrapper = document.createElement('div');
        markerWrapper.className = 'marker-wrapper';

        const markerElement = document.createElement('div');
        markerElement.className = 'custom-marker';


        const marker = new mapboxgl.Marker(markerElement)
          .setLngLat(JSON.parse(event.coordinates))
          .addTo(newMap);


        const popupContent = `<div>
          <h3>${event.show}</h3>
          <p class="label">Date:</p><p>${event.date}</p>
          <p class="label">Venue:</p><p>${event.venue}</p>
          <p class="label">Location:</p><p>${event.location}</p>
          <p class="label">Attendance:</p><p>${event.attendance}</p>
          <p><a href="${event.wikipage}" target="_blank">*Wikipedia*</a></p>
          <img src="${event.poster_url}" alt="Event Poster" style="width:160px">
        </div>`;



        markerElement.addEventListener('click', () => {
          newMap.flyTo({
            center: JSON.parse(event.coordinates),
            zoom: 10,
            essential: true,
            duration: 1000
          });
          const popup = new mapboxgl.Popup({ offset: 30 }).setHTML(popupContent);
          marker.setPopup(popup);
          popup.addTo(newMap);
        });
      });

      newMap.addControl(new mapboxgl.NavigationControl());


      newMap.doubleClickZoom.disable();

      setMap(newMap);
    });


    newMap.on('dblclick', () => {
      newMap.flyTo({
        center: [-20.0937, 12.0489],
        zoom: 2.4,
        pitch: 35,
        essential: true,
        duration: 1000
      });
    });

    return () => newMap.remove();
  }, []);

  const handleSearch = () => {
    const filteredEvents = eventData.eventData.filter(event => {
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
