import { IBaseLayer, IMarker, ILayers, tileLayers, MarkerColor } from './../../dist/esm'
import { drinkWaterSoraluze } from './data'

export interface UsePropertiesMap {
  buttonLabel: string
  center: { lat: number; lng: number }
  zoom?: number
  fullscreen?: boolean
  defaultLayer?: IBaseLayer
  markers?: Array<IMarker>
  layers?: ILayers
  defaultMarker?: string
  fitBounds?: {
    center: boolean
    markers: boolean
  }
  title: string
}
interface ExampleConfigs {
  Basic: UsePropertiesMap
  BasicFullscreen: UsePropertiesMap
  BasicWithDefaultMarker?: UsePropertiesMap
  MarkersBasic: UsePropertiesMap
  BasicWithDefaultMarkerAndPopup: UsePropertiesMap
  MapWithControlLayersBase: UsePropertiesMap
  MapWithCtrlLayers?: UsePropertiesMap
  MapWithCtrlLayersMarkers: UsePropertiesMap
  MarkersCustom: UsePropertiesMap
  MarkersCustomFitBoundsCenter: UsePropertiesMap
  MarkersCustomFitBoundsMarker: UsePropertiesMap
}

export const PLACES_LIST_LOCATIONS = {
  ADDIS_ABEBA_ETIOPIA: [8.9674055, 38.7896463],
  BARCELONA: [41.3926467, 2.0701492],
  BOGOTA_COLOMBIA: [4.7109877, -74.1071116],
  CARACAS_VENEZUELA: [10.4668323, -66.9081806],
  CASABLANCA: [33.5765585, -7.5969511],
  FLORENCIA: [43.7876803, 11.2339399],
  FORMIGAL: [42.7646, -0.395036],
  HONOLULU_HAWAI_EEUU: [21.3320135, -157.8287631],
  LONDRES_GRAN_BRETAÑA: [51.5285582, -0.2416809],
  LOS_ANGELES_EEUU: [34.0201613, -118.6919198],
  MADRID: [40.4378698, -3.8196205],
  MANILA_FILIPINAS: [14.5964957, 120.9445402],
  MOSCU_RUSIA: [55.7535874, 37.546607],
  PARIS_FRANCIA: [48.8588377, 2.2770203],
  SAN_FRANCISCO_EEUU: [37.754894, -122.4290677],
  SEVILLA: [37.3753501, -6.0250982],
  SORALUZE: [43.1736976, -2.4173474],
  TAIPEI_TAIWAN: [25.0171608, 121.3662924],
  TOKIO_JAPON: [35.6681625, 139.6007832],
  VALENCIA: [39.4669627, -0.4352962],
  VENECIA_ITALIA: [45.4374999, 12.3319962],
  VITORIA_GASTEIZ: [42.8540316, -2.7121775],
}

const defaultLocation = {
  lat: PLACES_LIST_LOCATIONS.MADRID[0],
  lng: PLACES_LIST_LOCATIONS.MADRID[1],
} // Madrid

export const EXAMPLES_CONFIGS: ExampleConfigs = {
  Basic: {
    buttonLabel: 'Mapa',
    center: defaultLocation,
    title: 'Ejemplo Básico de carga de mapa. El zoom es aleatorio y por cada recarga se asigna uno nuevo',
  },
  BasicFullscreen: {
    buttonLabel: 'Fullscreen',
    center: defaultLocation,
    defaultLayer: {
      map: tileLayers.baseLayers.cycloOsm.map,
      atribution: tileLayers.baseLayers.cycloOsm.atribution,
    },
    zoom: 10,
    fullscreen: true,
    title: 'Ejemplo Básico de carga de mapa con control para mostrar mapa en pantalla completa',
  },
  /*BasicWithDefaultMarker: {
    buttonLabel: 'Marcador',
    center: defaultLocation,
    zoom: 15,
    defaultMarker: MarkerColor.Red,
    markers: [
      {
        position: defaultLocation,
      },
    ],
    defaultLayer: {
      map: tileLayers.baseLayers.osmDE.map,
      atribution: tileLayers.baseLayers.osmDE.atribution,
    },
    title: 'Ejemplo Básico de carga de mapa con un marcador',
  },*/
  BasicWithDefaultMarkerAndPopup: {
    buttonLabel: 'Marcador + Info',
    center: defaultLocation,
    zoom: 17,
    defaultMarker: MarkerColor.Orange,
    defaultLayer: {
      map: tileLayers.baseLayers.osmDE.map,
      atribution: tileLayers.baseLayers.osmDE.atribution,
    },
    markers: [
      {
        position: defaultLocation,
        popup: {
          content: `<h2>Madrid (Comunidad de Madrid)</h2>`,
        },
      },
    ],
    title:
      'Ejemplo Básico de carga de mapa con un marcador que contiene opción a mostrar más información con un popup que trabaja como ventana emergente',
  },
  MarkersBasic: {
    buttonLabel: 'Marcadores + Info',
    center: defaultLocation,
    zoom: 10,
    defaultMarker: MarkerColor.Violet,
    markers: [
      {
        position: {
          lat: 40.417333,
          lng: -3.683028,
        },
        popup: {
          content: `
          <h4>Monumento Alfonso XII</h4>
          <img className="photo" src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Monumento_a_Alfonso_XII_de_Espa%C3%B1a_en_los_Jardines_del_Retiro_-_04.jpg" alt="alfonso_xii"/>
          <a href="https://es.wikipedia.org/wiki/Monumento_a_Alfonso_XII_(Madrid)" target="_blank">Más información</a>
          `,
        },
      },
      {
        position: {
          lat: 40.3987375,
          lng: -3.6914894,
        },
        popup: {
          content: `
          <h4>Museo Ferrocarril Madrid</h4>
          <img className="photo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Madrid_-_Estaci%C3%B3n_Delicias_-_130120_123012.jpg/280px-Madrid_-_Estaci%C3%B3n_Delicias_-_130120_123012.jpg" alt="alfonso_xii"/>
          <a href="https://es.wikipedia.org/wiki/Museo_del_Ferrocarril_de_Madrid" target="_blank">Más información</a>
          `,
        },
      },
    ],
    title:
      'Ejemplo Básico de carga de mapa con marcadores que contienen información adicional mediante el uso de popups',
  },
  MapWithControlLayersBase: {
    buttonLabel: 'Capas - Sin límite de uso',
    zoom: 14,
    center: defaultLocation,
    layers: {
      position: 'topleft',
      baseLayers: [
        {
          label: 'Default - Mapnik',
          map: tileLayers.baseLayers.default.map,
          atribution: tileLayers.baseLayers.default.atribution,
          default: true,
        },
        {
          label: 'OSMDeutchLand',
          map: tileLayers.baseLayers.osmDE.map,
          atribution: tileLayers.baseLayers.osmDE.atribution,
        },
        {
          label: 'CycloOSM',
          map: tileLayers.baseLayers.cycloOsm.map,
          atribution: tileLayers.baseLayers.cycloOsm.atribution,
        },
        {
          label: 'OSMHot',
          map: tileLayers.baseLayers.osmHot.map,
          atribution: tileLayers.baseLayers.osmHot.atribution,
        },

        {
          label: 'OPNVKarte - Transporte',
          map: tileLayers.baseLayers.opnVKarte.map,
          atribution: tileLayers.baseLayers.opnVKarte.atribution,
        },
      ],
      overLayers: [
        {
          label: 'Trail / Hiking',
          map: tileLayers.overlayers.wayMarkedTrails.hiking,
          select: false,
        },
        {
          label: 'Cycling',
          map: tileLayers.overlayers.wayMarkedTrails.cycling,
          select: false,
        },
        {
          label: 'Open Railway',
          map: tileLayers.overlayers.openRailway,
          select: false,
        },
        {
          label: 'Ski Stations',
          map: tileLayers.overlayers.wayMarkedTrails.slopes,
          select: false,
        },
      ],
    },
    title:
      'Ejemplo con uso de control de capas base que NO tienen límite de uso. Se añaden las capas base que nos interesan junto con las de superposición',
  },
  MapWithCtrlLayersMarkers: {
    buttonLabel: 'Capas + Marker',
    fullscreen: true,
    center: {
      lat: PLACES_LIST_LOCATIONS.FORMIGAL[0],
      lng: PLACES_LIST_LOCATIONS.FORMIGAL[1],
    },
    zoom: 13,
    markers: [
      {
        position: {
          lat: PLACES_LIST_LOCATIONS.FORMIGAL[0],
          lng: PLACES_LIST_LOCATIONS.FORMIGAL[1],
        },
        popup: {
          content: `
          <h4>Formigal</h4>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Formigal_2007.jpg/266px-Formigal_2007.jpg" alt="Formigal" />
          <a href="https://es.wikipedia.org/wiki/Formigal" target="_blank" >Más información</a>
          `,
        },
      },
    ],
    layers: {
      position: 'topleft',
      baseLayers: [
        {
          label: 'OSMHot',
          map: tileLayers.baseLayers.osmHot.map,
          atribution: tileLayers.baseLayers.osmHot.atribution,
          default: true,
        },
        {
          label: 'CyclOSM Map',
          map: tileLayers.baseLayers.cycloOsm.map,
          atribution: tileLayers.baseLayers.cycloOsm.atribution,
        },
      ],
      overLayers: [
        {
          label: 'Trail / Hiking',
          map: tileLayers.overlayers.wayMarkedTrails.hiking,
          select: false,
        },
        {
          label: 'Ski Stations',
          map: tileLayers.overlayers.wayMarkedTrails.slopes,
          select: true,
        },
      ],
    },
    title: 'Ejemplo de control de capas usando las base y de superposición (overlayers) con marcadores con información',
  },
  MarkersCustom: {
    // No centra cámara en base a nada, coge el zoom asignado
    buttonLabel: 'Marcadores Custom',
    center: {
      lat: 43.174778,
      lng: -2.411722,
    },
    zoom: 11,
    fullscreen: true,
    markers: [
      ...drinkWaterSoraluze.map((drinkWater) => {
        return {
          custom: true,
          position: {
            lat: drinkWater.lat,
            lng: drinkWater.lon,
          },
          popup: {
            content: `
        <h2>${drinkWater.name}</h2>
        `,
          },
        }
      }),
    ],
    title: 'Ejemplo de uso de marcadores personalizados con las ubicaciones especificas',
  },
  MarkersCustomFitBoundsCenter: {
    buttonLabel: 'Fitbounds Center',
    fitBounds: {
      center: true,
      markers: false,
    },
    center: {
      lat: 43.174778,
      lng: -2.411722,
    },
    zoom: 1,
    fullscreen: true,
    markers: [
      ...drinkWaterSoraluze.map((drinkWater) => {
        return {
          custom: true,
          position: {
            lat: drinkWater.lat,
            lng: drinkWater.lon,
          },
          popup: {
            content: `
        <h2>${drinkWater.name}</h2>
        `,
          },
        }
      }),
    ],
    title:
      'Ejemplo de control de capas usando las base y de superposición (overlayers) con correción del zoom en base a la posición central del mapa',
  },
  MarkersCustomFitBoundsMarker: {
    buttonLabel: 'FitBounds Marcadores',
    fitBounds: {
      center: false,
      markers: true,
    },
    center: {
      lat: 43.174778,
      lng: -2.411722,
    },
    zoom: 1,
    fullscreen: true,
    markers: [
      ...drinkWaterSoraluze.map((drinkWater) => {
        return {
          custom: true,
          position: {
            lat: drinkWater.lat,
            lng: drinkWater.lon,
          },
          popup: {
            content: `
        <h2>${drinkWater.name}</h2>
        `,
          },
        }
      }),
    ],
    title:
      'Ejemplo de control de capas usando las base y de superposición (overlayers) con correción del zoom en base a la posición de los marcadores del mapa',
  },
}
