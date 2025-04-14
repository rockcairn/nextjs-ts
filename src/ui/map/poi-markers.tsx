'use client'
import { useRef, useState } from 'react';

import {
    AdvancedMarker,
    InfoWindow,
    Pin,
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
            onClick={() => setOpenMarkerId(poi.key)}
            >
              <Pin background={poi.color} glyphColor={'#000'} borderColor={'#000'} />
              {openMarkerId === poi.key && (<InfoWindow
            anchor={markerRefs.current[poi.key]!}
            maxWidth={240}
            onCloseClick={() => setOpenMarkerId(null)}
            headerContent={poi.key + " (" + poi.ele + " ft.)"} >
                <div style={{textAlign: 'center', padding:'1px 2px 10px 2px'}} className='text-gray-500 dark:text-gray-400'>
                  <a href={`${poi.domain}${poi.path}`} className='font-medium text-blue-500 p-1'>
                    <span className="group-hover:underline">Trip Report</span>
                  </a>
                    or
                  (<a style={{fontSize: '12px'}} className='font-medium text-blue-500 p-1' href="#map" onClick={() => {map!.panTo(poi.location); map!.setZoom(12);}} >focus map</a>)
                </div>
          </InfoWindow>
          )};
          </AdvancedMarker>
        ))}
      </>
    );
  };