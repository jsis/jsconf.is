import 'babel-polyfill';
import './modules/router';
import styles from './data/gmaps-styles';

window.initMap = () => {
  const venueLocation = { lat: 64.1503366, lng: -21.9348961 };

  const map = new window.google.maps.Map(document.querySelector('.google-maps'), {
    center: venueLocation,
    zoom: 14,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
    disableDefaultUI: true,
    styles,
  });

  const marker = new window.google.maps.Marker({
    position: venueLocation,
    title: 'Harp',
    map,
  });

  return { map, marker };
};
