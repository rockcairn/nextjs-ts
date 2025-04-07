'use client'
import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
} from '@vis.gl/react-google-maps';

import PoiMarkers, { Poi } from './poi-markers';
import { Suspense, useEffect, useState } from 'react';

const locations: Poi[] = [
  { key: 'operaHouse', location: { lat: -33.8567844, lng: 151.213108 } },
  { key: 'tarongaZoo', location: { lat: -33.8472767, lng: 151.2188164 } },
  { key: 'manlyBeach', location: { lat: -33.8209738, lng: 151.2563253 } },
  { key: 'hyderPark', location: { lat: -33.8690081, lng: 151.2052393 } },
  { key: 'theRocks', location: { lat: -33.8587568, lng: 151.2058246 } },
  { key: 'circularQuay', location: { lat: -33.858761, lng: 151.2055688 } },
  { key: 'harbourBridge', location: { lat: -33.852228, lng: 151.2038374 } },
  { key: 'kingsCross', location: { lat: -33.8737375, lng: 151.222569 } },
  { key: 'botanicGardens', location: { lat: -33.864167, lng: 151.216387 } },
  { key: 'museumOfSydney', location: { lat: -33.8636005, lng: 151.2092542 } },
  { key: 'maritimeMuseum', location: { lat: -33.869395, lng: 151.198648 } },
  { key: 'kingStreetWharf', location: { lat: -33.8665445, lng: 151.1989808 } },
  { key: 'aquarium', location: { lat: -33.869627, lng: 151.202146 } },
  { key: 'darlingHarbour', location: { lat: -33.87488, lng: 151.1987113 } },
  { key: 'barangaroo', location: { lat: -33.8605523, lng: 151.1972205 } },
];

export default function PeaksMap() {

  const [apiKey, setApiKey] = useState<string | null>(null);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [markers, setMarkers] = useState<Poi[] | null>(null);
  useEffect(() => {
    // Fetch location and API key from backend
    const fetchData = async () => {
      const keyRes = await fetch('/api/map/apikey');
      const { key } = await keyRes.json();
      setApiKey(key);
      const locRes = await fetch('/api/map/center');
      const loc = await locRes.json();
      setLocation(loc);
      const mrkRes = await fetch('/api/map');
      const mrk = await mrkRes.json();
      setMarkers(JSON.parse(JSON.stringify(mrk)));
    };

    fetchData();
    console.log('key: [' + apiKey + ']');
  }, []);
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div style={{ height: '100vh', width: '100%' }}>
            <Suspense key={apiKey} fallback={<div>loading</div>}>
            <APIProvider
              apiKey={apiKey!}
              onLoad={() => console.log('Maps API has loaded.')}
            >
              <Map
                defaultZoom={7}
                defaultCenter={location!}
                onCameraChanged={(ev: MapCameraChangedEvent) =>
                  console.log(
                    'camera changed:',
                    ev.detail.center,
                    'zoom:',
                    ev.detail.zoom
                  )
                }
                mapTypeId={google.maps.MapTypeId.TERRAIN}
                mapId="ROCKCAIRN_MAP_ID"
              >
                <PoiMarkers pois={markers!} />
              </Map>
            </APIProvider>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
