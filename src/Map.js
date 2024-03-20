import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './mapbox-gl.css';

function Map() {
  const [map, setMap] = useState(null);
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW1hbm5pbm85MiIsImEiOiJjbHRxdTIxMmQwYWJyMmptb2V0b2I5N2s0In0.Gi41GFW13BHS4BCY3psEqQ'; // API KEY HERE

    const initializeMap = () => {
      const mapInstance = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/amannino92/cltw0qns6010c01pb657hagns',
        center: [-100.0937, 41.0489], // starting position [lng, lat]
        zoom: 4.2, // starting zoom
        pitch: 25, // starting pitch
        bearing: 40, // starting bearing
      });

      mapInstance.on('load', () => {
        setMap(mapInstance);
        mapInstance.addSource('points', {
          'type': 'geojson',
          'data': {
            'type': 'FeatureCollection',
            'features': [
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-90.5069, 14.6349]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-104.97708300000001, 39.7405215]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-80.82879, 35.218695000000004]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-95.9309, 36.1342]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-80.85281499999998, 35.22580600000001]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-106.332889, 42.8682295]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-78.877, 42.9333]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-66.15781, 18.399654]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-83.0477265, 42.3266345]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-86.874225, 33.49498]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-69.7986195, 44.3424505]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-85.3899855, 31.224796]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-69.7986195, 44.3424505]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-86.657094, 33.529857]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-80.82879, 35.218695000000004]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-89.3502106, 30.331221999999997]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-90.04, 30.02]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-88.044793, 30.686003999999997]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-90.04, 30.02]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-89.3502106, 30.331221999999997]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-86.657094, 33.529857]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-91.6704, 41.9759]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-93.221487, 30.228534999999997]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [140.12333, 35.605]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-93.221487, 30.228534999999997]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [139.700752, 35.6679065]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-91.6704, 41.9759]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-90.050562, 30.030061]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-74.420687, 39.360302000000004]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [139.79189325, 35.6336905]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-74.420687, 39.360302000000004]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-74.420687, 39.360302000000004]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-74.07624, 40.81312]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-115.178946, 36.0906785]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-115.169513, 36.102367]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-72.09029075000002, 41.491343]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-115.169513, 36.102367]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-93.67360699999999, 32.465134500000005]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-115.17709750000002, 36.1111205]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-0.17740299999999998, 51.501061]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-72.09029075000002, 41.491343]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-115.169513, 36.102367]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-74.4390255, 39.353911]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-80.1879725, 25.781348]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-115.14428400000001, 36.1050975]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-115.178946, 36.0906785]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-72.09029075000002, 41.491343]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-115.178946, 36.0906785]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-115.178946, 36.0906785]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-115.178946, 36.0906785]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-115.169513, 36.102367]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-74.4390255, 39.353911]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-115.178946, 36.0906785]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-115.169513, 36.102367]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-74.4390255, 39.353911] //50
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-115.178946, 36.0906785]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-115.169513, 36.102367]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-74.4390255, 39.353911]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-115.169513, 36.102367]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-72.09029075000002, 41.491343]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-115.169513, 36.102367]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-115.178946, 36.0906785]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-115.178946, 36.0906785]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-117.876659, 33.807835]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-118.2672065, 34.0430705]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-115.171283, 36.1204695]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-115.178946, 36.0906785]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-115.178946, 36.0906785]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-117.876659, 33.807835] //63
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-121.51785, 38.649029]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-115.169513, 36.102367]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-83.0060235, 39.969288] //68
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-95.362215, 29.750890000000002]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-2.243918, 53.4881655]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-115.169513, 36.102367]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-5.84, 54.59093000000001]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-115.19508, 36.11461]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [0.003291375, 51.502808625]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-117.876659, 33.807835]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-84.504573, 39.097971]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-74.171133, 40.7336095]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-1.622718, 54.9639405]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-83.0060235, 39.969288] //82
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-73.5693785, 45.4960725]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-93.276103, 44.97945350000001]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-84.3963765, 33.757180500000004]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-95.9379, 41.2587]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-1.9148205000000003, 52.479751500000006]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-87.88774599999998, 42.005313]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-78.89167900000002, 35.015297499999996]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-82.40649099999997, 28.059369] //95
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-86.7744, 36.1622]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-73.5693785, 45.4960725]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [6.981977499999998, 50.938449]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-75.171908, 39.9011165] //101
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-122.6742, 45.5202]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-96.81005225, 32.790229749999995]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-118.2672065, 34.0430705]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-2.243918, 53.4881655]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-90.050848, 35.138411000000005] //107
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [151.06224600000004, -33.844529]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [54.598397999999996, 24.467944]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-123.1139, 49.2609]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-122.202835625, 37.750767625]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-71.06206275, 42.366164500000004]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-86.15557050000002, 39.7639575]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [6.872622, 51.4900645] //122
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-83.2341, 42.6875]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [151.06224600000004, -33.844529]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-79.38837925, 43.6415585]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-123.108806, 49.2778505]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-75.171908, 39.9011165]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-43.3904225, -22.975163] //134
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-105.0075355, 39.7486095]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-95.362215, 29.750890000000002]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-1.9485880000000002, 52.391234999999995]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-121.901202, 37.3328665]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-79.3791035, 43.643389500000005]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-43.3904225, -22.975163]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-87.6742055, 41.8806415]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-95.9379, 41.2587]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [139.63084049999998, 35.89474149999999]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-84.3963765, 33.757180500000004] //145
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-43.9451, -19.9227]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-114.05209099999999, 51.03787]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-118.2672065, 34.0430705]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-105.0075355, 39.7486095]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-79.3791035, 43.643389500000005]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-43.3904225, -22.975163]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [103.0, 35.0]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-122.3536745, 47.622131]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [18.0817244375, 59.293773]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-97.1436765, 49.8926835] //161
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-87.9075, 43.040229]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-95.362215, 29.750890000000002]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-96.81005225, 32.790229749999995]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-76.61918800000002, 39.2889465]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-115.169513, 36.102367]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-121.51785, 38.649029]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-43.2292695, -22.913921]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-99.175252, 19.496916]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-99.175252, 19.496916] //188
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [144.9477615, -37.8164805]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-45.01135100000001, -12.1266305]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-118.341951, 33.958211999999996]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-115.1782595, 36.1028325] //200
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-81.6881325, 41.496479]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-2.243918, 53.4881655]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-73.99365162500001, 40.750709125]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-73.97703299999999, 40.68364325]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-78.87648, 42.8751295]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-43.3904225, -22.975163]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-113.4977475, 53.546962]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-83.054969, 42.34111400000001]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [115.8520415, -31.948363]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [144.978451, -37.821633]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-84.3963765, 33.757180500000004]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [54.598397999999996, 24.467944] //242
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [144.9477615, -37.8164805]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-81.64498, 30.325804499999997]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-115.1492, 36.1663] //250
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-96.81005225, 32.790229749999995]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-76.61918800000002, 39.2889465]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [24.4858, 54.6036]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [24.4865, 54.6087]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-112.2613, 33.5322] //263
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-112.0717, 33.4456]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [103.8757, 1.3020]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-111.9011, 40.7683]//278
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [115.8580, -31.9485]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-80.1866, 25.7814]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-111.9011, 40.7683]
                }
              },
              {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': [151.0691, -33.8483] //299
                }
              },
            ]
          }
        });
        // Add a circle layer
        mapInstance.addLayer({
          id: 'circle',
          type: 'circle',
          source: 'points',
          paint: {
            'circle-color': '#850303',
            'circle-radius': 11,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#DB8000',
          },
        });

        const newPopup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
          offset: [0, -35],
        });

        setPopup(newPopup);

        mapInstance.on('click', 'circle', (e) => {
          if (e.features.length > 0) {
            const coordinates = e.features[0].geometry.coordinates.slice();
            const properties = e.features[0].properties;

            // Zoom into the clicked circle
            mapInstance.flyTo({
              center: coordinates,
              zoom: 14, // Adjust the zoom level as needed
              duration: 5000,
              essential: true
            });
          }
        });

        mapInstance.on('mouseenter', 'circle', (e) => {
          if (e.features.length > 0) {
            const coordinates = e.features[0].geometry.coordinates.slice();
            const properties = e.features[0].properties;

            let htmlContent = '<div class="popup">';
            htmlContent += `<p class="popup-title">${properties.title}</p>`; // Use title property
            htmlContent += `<p class="popup-paragraph">Date: ${properties.datee}</p>`;
            htmlContent += `<p class="popup-paragraph">Attendance: ${properties.attendance}</p>`;
            htmlContent += `<p class="popup-paragraph">Wikipage: <a class="popup-link" href="${properties.wikipage}" target="_blank">${properties.show}</a></p>`;
            htmlContent += '</div>';

            newPopup.setLngLat(coordinates).setHTML(htmlContent).addTo(mapInstance);
          }
        });

        mapInstance.on('mouseleave', 'circle', () => {
          newPopup.remove();
        });
      });

      mapInstance.addControl(new mapboxgl.NavigationControl());

      return () => mapInstance.remove(); // Clean up on unmount
    };

    initializeMap();

  }, []);

  return <div id="map" style={{ width: '100%', height: '95vh' }}></div>;
}

export default Map;