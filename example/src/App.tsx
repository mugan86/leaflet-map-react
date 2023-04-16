import * as React from 'react'
import { ISizeMap, LeafletMap, MapProps, MarkerColor } from 'leaflet-react'
import { PLACES_LIST_LOCATIONS } from './examples'
import { randomLocationValuesFromBounds } from './helpers/random'

export default function App() {
  const [mapConfig, setMapConfig] = React.useState<MapProps>()
  const defaultLocation = {
    lat: PLACES_LIST_LOCATIONS.MADRID[0],
    lng: PLACES_LIST_LOCATIONS.MADRID[1],
  }

  const size: ISizeMap = {
    width: '100%',
    height: '87vh',
  }
  // ,
  const aroundMarkers = randomLocationValuesFromBounds(
    200,
    {
      lat: 40.520785,
      lng: -3.536435,
    },
    {
      lat: 40.312815,
      lng: -3.871165,
    },
  )

  const markers = [
    {
      position: defaultLocation,
      popup: {
        content: `<h2>Madrid (Comunidad de Madrid)</h2>`,
      },
    },
    ...aroundMarkers.map((marker) => {
      return {
        position: marker,
        popup: {
          content: `<h2>Madrid (${marker.lat},${marker.lng})</h2>`,
        },
      }
    }),
  ]

  const mapStartConfig = {
    id: 'map',
    style: size,
    center: defaultLocation,
    zoom: 12,
    defaultMarker: MarkerColor.Green,
    markers,
  }

  React.useEffect(() => {
    if (!mapConfig) {
      setMapConfig(mapStartConfig)
    }
  }, [mapConfig])

  return <div>{mapConfig ? <LeafletMap config={mapConfig} /> : <p>Cargando...</p>}</div>
}
