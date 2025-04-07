'use client'
import { useCallback, useEffect, useRef, useState } from 'react';

import type { Marker } from '@googlemaps/markerclusterer';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import {
    AdvancedMarker,
    InfoWindow,
    Pin,
    useMap
} from '@vis.gl/react-google-maps';
import { boolean } from 'zod';

export type Poi ={ key: string, domain: string, path: string, color: string, ele: number, location: google.maps.LatLngLiteral }

export default function PoiMarkers(props: { pois: Poi[] }) {
    const map = useMap();
    const [openInfo, setOpenInfo] = useState<string>();
    const [markers, setMarkers] = useState<{[key: string]: Marker}>({});
  
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
        <div>
          <AdvancedMarker
            title={poi.key}
            key={poi.key}
            position={poi.location}
            ref={marker => setMarkerRef(marker, poi.key)}
            clickable={true}
            onClick={() => setOpenInfo(poi.key)}
            >
              <Pin background={poi.color} glyphColor={'#000'} borderColor={'#000'} />
          </AdvancedMarker>
          {openInfo === poi.key && (<InfoWindow
            anchor={markers[poi.key]}
            maxWidth={200}
            onCloseClick={() => setOpenInfo('')}
            headerContent={poi.key + " (" + poi.ele + " ft.)"} >
                <div style={{textAlign: 'center', padding:'1px 2px 10px 2px'}}><a href={`${poi.domain}${poi.path}`} >Trip Report</a>
                or (<a style={{fontSize: '12px'}} href="#map" onClick={() => {map!.panTo(poi.location); map!.setZoom(12);}} >focus map</a>) </div>
          </InfoWindow>
          )};
        </div>
        ))}
      </>
    );
  };