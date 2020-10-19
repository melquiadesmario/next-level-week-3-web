import Leaflet from 'leaflet';

import mapMarkerImg from '../assets/map-marker.svg';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [50, 60],
    iconAnchor: [25, 60],
    popupAnchor: [170, 2]
  })

  export default mapIcon;
