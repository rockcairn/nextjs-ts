'use client'
import { useRef, useState } from 'react';

import type { Marker } from '@googlemaps/markerclusterer';
import {
    AdvancedMarker,
    InfoWindow,
    Pin,
    useAdvancedMarkerRef,
    useMap
} from '@vis.gl/react-google-maps';

export type Poi ={ key: string, domain: string, path: string, color: string, ele: number, location: google.maps.LatLngLiteral }

export default function PoiMarkers(props: { pois: Poi[] }) {
    const map = useMap();
    const [openMarkerId, setOpenMarkerId] = useState<string | null>(null);
    const markerRefs = useRef<Record<string, google.maps.marker.AdvancedMarkerElement | null>>({});
  
    return (
      <>
        {props.pois.map( (poi: Poi) => (
          <AdvancedMarker
            title={poi.key}
            position={poi.location}
            key={poi.key}
            ref={(ref) => { markerRefs.current[poi.key] = ref;}}
            clickable={true}
            // onClick={() => setOpenInfo(poi.key)}
            onClick={() => setOpenMarkerId(poi.key)}
            >
              <Pin background={poi.color} glyphColor={'#000'} borderColor={'#000'} />
              {openMarkerId === poi.key && (<InfoWindow
            // anchor={markers[poi.key]}
            anchor={markerRefs.current[poi.key]!}
            maxWidth={200}
            // onCloseClick={() => setOpenInfo('')}
            onCloseClick={() => setOpenMarkerId(null)}
            headerContent={poi.key + " (" + poi.ele + " ft.)"} >
                <div style={{textAlign: 'center', padding:'1px 2px 10px 2px'}}><a href={`${poi.domain}${poi.path}`} >Trip Report</a>
                or (<a style={{fontSize: '12px'}} href="#map" onClick={() => {map!.panTo(poi.location); map!.setZoom(12);}} >focus map</a>) </div>
          </InfoWindow>
          )};
          </AdvancedMarker>
         
        // </div>
        ))}
      </>
    );
  };