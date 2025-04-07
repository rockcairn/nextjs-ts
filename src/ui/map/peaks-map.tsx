'use client'
import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
} from '@vis.gl/react-google-maps';

import PoiMarkers, { Poi } from './poi-markers';
import { Suspense, useEffect, useState } from 'react';

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
            {apiKey && location && markers && ( <APIProvider
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
                mapTypeId="terrain"
                mapId="ROCKCAIRN_MAP_ID"
              >
                <PoiMarkers pois={markers!} />
              </Map>
            </APIProvider>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
