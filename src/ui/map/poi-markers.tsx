'use client'
import { useCallback, useEffect, useRef, useState } from 'react';

import type { Marker } from '@googlemaps/markerclusterer';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import {
    AdvancedMarker,
    Pin,
    useMap
} from '@vis.gl/react-google-maps';

export type Poi ={ key: string, location: google.maps.LatLngLiteral }

export default function PoiMarkers(props: { pois: Poi[] }) {
    const map = useMap();
    const [markers, setMarkers] = useState<{[key: string]: Marker}>({});
    const clusterer = useRef<MarkerClusterer | null>(null);
    const handleClick = useCallback((ev: google.maps.MapMouseEvent) => {
      if(!map) return;
      if(!ev.latLng) return;
      console.log('marker clicked: ', ev.latLng.toString());
      map.panTo(ev.latLng);
    },[]);
    // Initialize MarkerClusterer, if the map has changed
    useEffect(() => {
      if (!map) return;
      if (!clusterer.current) {
        clusterer.current = new MarkerClusterer({map});
      }
    }, [map]);
  
    // Update markers, if the markers array has changed
    useEffect(() => {
      clusterer.current?.clearMarkers();
      clusterer.current?.addMarkers(Object.values(markers));
    }, [markers]);
  
    const setMarkerRef = (marker: Marker | null, key: string) => {
      if (marker && markers[key]) return;
      if (!marker && !markers[key]) return;
  
      setMarkers(prev => {
        if (marker) {
          return {...prev, [key]: marker};
        } else {
          const newMarkers = {...prev};
          delete newMarkers[key];
          return newMarkers;
        }
      });
    };
  
    return (
      <>
        {props.pois.map( (poi: Poi) => (
          <AdvancedMarker
            key={poi.key}
            position={poi.location}
            ref={marker => setMarkerRef(marker, poi.key)}
            clickable={true}
            onClick={handleClick}
            >
              <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
          </AdvancedMarker>
        ))}
      </>
    );
  };