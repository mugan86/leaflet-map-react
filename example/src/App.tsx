import * as React from 'react';
import { ISizeMap, LeafletMap, MapProps } from 'leaflet-react';
import { PLACES_LIST_LOCATIONS } from './examples';


export default function App() {
  const [mapConfig, setMapConfig] = React.useState<MapProps>();
  const defaultLocation = {
    lat: PLACES_LIST_LOCATIONS.MADRID[0],
    lng: PLACES_LIST_LOCATIONS.MADRID[1],
  }

  const size: ISizeMap = {
    width: '100%',
    height: '87vh',
  };
  const mapStartConfig: MapProps = {
    id: 'map',
    style: size,
    center: defaultLocation,
    zoom: 15,
  }

  

  React.useEffect(() => {
    if (!mapConfig) {
      setMapConfig(mapStartConfig);
    }
  }, [mapConfig]);

  

  return (
    <div>
      {mapConfig ? <LeafletMap config={mapConfig} /> : <p>Cargando...</p>}
    </div>
  );
}
