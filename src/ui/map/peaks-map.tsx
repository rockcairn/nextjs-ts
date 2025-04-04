import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
} from '@vis.gl/react-google-maps';

import PoiMarkers, { Poi } from './poi-markers';

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
  // might need to api call to get the Key...
  const apiKey: string = process.env.GOOGLE_MAPS_API_KEY || '';
  console.log('key: [' + apiKey + ']');
  // const centermap =  { lat: 39.050000, lng: -105.497017 } // colorado
  const centermap =  { lat: -33.860664, lng: 151.208138 }
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div style={{ height: '100vh', width: '100%' }}>
            <APIProvider
              apiKey={apiKey}
              onLoad={() => console.log('Maps API has loaded.')}
            >
              <Map
                defaultZoom={13}
                defaultCenter={centermap}
                onCameraChanged={(ev: MapCameraChangedEvent) =>
                  console.log(
                    'camera changed:',
                    ev.detail.center,
                    'zoom:',
                    ev.detail.zoom
                  )
                }
                mapId="da37f3254c6a6d1c"
              >
                <PoiMarkers pois={locations} />
              </Map>
            </APIProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
