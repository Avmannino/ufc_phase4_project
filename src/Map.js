import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

function Map() {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW1hbm5pbm85MiIsImEiOiJjbHRxdTIxMmQwYWJyMmptb2V0b2I5N2s0In0.Gi41GFW13BHS4BCY3psEqQ'; // API KEY HERE
    const mapContainer = document.getElementById('map');

    if (!mapContainer) {
      console.error("Container 'map' not found.");
      return;
    }

    const map = new mapboxgl.Map({
      container: mapContainer,
      style: 'mapbox://styles/amannino92/clturucaq01sx01p5ay7b0iq1',
      center: [-104.9653, 39.7348],
      zoom: 3
    });
    map.on('load', () => {
      // Add a GeoJSON source with 3 points.
      map.addSource('points', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-104.9653, 39.7348]
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
                'coordinates': [-95.9309,36.1342]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-80.85281499999998,35.22580600000001]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-106.332889,42.8682295]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-78.877,42.9333]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-66.15781,18.399654]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-83.0477265,42.3266345]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-86.874225,33.49498]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-69.7986195,44.3424505]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-85.3899855,31.224796]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-69.7986195,44.3424505]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-86.657094,33.529857]
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
                'coordinates': [-89.3502106,30.331221999999997]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-90.04,30.02]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-88.044793,30.686003999999997]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-90.04,30.02]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-89.3502106,30.331221999999997]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-86.657094,33.529857]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-91.6704,41.9759]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-93.221487,30.228534999999997]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [140.12333,35.605]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-93.221487,30.228534999999997]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [139.700752,35.6679065]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-91.6704,41.9759]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-90.050562,30.030061]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-74.420687,39.360302000000004]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [139.79189325,35.6336905]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-74.420687,39.360302000000004]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-74.420687,39.360302000000004]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-74.07624,40.81312]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.169513,36.102367]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-72.09029075000002,41.491343]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.169513,36.102367]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-93.67360699999999,32.465134500000005]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.17709750000002,36.1111205]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-0.17740299999999998,51.501061]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-72.09029075000002,41.491343]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.169513,36.102367]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-74.4390255,39.353911]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-80.1879725,25.781348]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.14428400000001,36.1050975]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-72.09029075000002,41.491343]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.169513,36.102367]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-74.4390255,39.353911]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.169513,36.102367]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-74.4390255,39.353911] //50
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.169513,36.102367]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-74.4390255,39.353911]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.169513,36.102367]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-72.09029075000002,41.491343]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.169513,36.102367]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-117.876659,33.807835]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-118.2672065,34.0430705]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.171283,36.1204695]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-117.876659,33.807835] //63
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-121.51785,38.649029]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.169513,36.102367]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-83.0060235,39.969288] //68
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-95.362215,29.750890000000002]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-2.243918,53.4881655]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.169513,36.102367]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-5.84,54.59093000000001]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.19508,36.11461]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [0.003291375,51.502808625]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-117.876659,33.807835]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-84.504573,39.097971]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-74.171133,40.7336095]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-1.622718,54.9639405]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-83.0060235,39.969288] //82
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-73.5693785,45.4960725]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-93.276103,44.97945350000001]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-84.3963765,33.757180500000004]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-95.9379,41.2587]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-1.9148205000000003,52.479751500000006]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-87.88774599999998,42.005313]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-78.89167900000002,35.015297499999996]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-82.40649099999997,28.059369] //95
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-86.7744,36.1622]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-73.5693785,45.4960725]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [6.981977499999998,50.938449]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.169513,36.102367]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.169513,36.102367]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.169513,36.102367]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.169513,36.102367]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.169513,36.102367]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.169513,36.102367]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.169513,36.102367]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.169513,36.102367]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.169513,36.102367]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.169513,36.102367]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.169513,36.102367]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.169513,36.102367]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.169513,36.102367]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.169513,36.102367]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.169513,36.102367]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.169513,36.102367]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.169513,36.102367]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [-115.178946,36.0906785]
              }
            },
          ]
        }
      });
      // Add a circle layer
      map.addLayer({
        'id': 'circle',
        'type': 'circle',
        'source': 'points',
        'paint': {
          'circle-color': '#4264fb',
          'circle-radius': 8,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#ffffff'
        }
      });

      // Center the map on the coordinates of any clicked circle from the 'circle' layer.
      map.on('click', 'circle', (e) => {
        map.flyTo({
          center: e.features[0].geometry.coordinates
        });
      });

      // Change the cursor to a pointer when the it enters a feature in the 'circle' layer.
      map.on('mouseenter', 'circle', () => {
        map.getCanvas().style.cursor = 'pointer';
      });

      // Change it back to a pointer when it leaves.
      map.on('mouseleave', 'circle', () => {
        map.getCanvas().style.cursor = '';
      });
    });

    map.addControl(new mapboxgl.NavigationControl());
  }, []);

  return <div id="map" style={{ width: '100%', height: '95vh' }}></div>;
}

export default Map;







