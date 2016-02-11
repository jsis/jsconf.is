import 'babel-polyfill';
import './modules/router';
import './modules/no-scroll';
import styles from './data/gmaps-styles';

window.initMap = () => new window.google.maps.Map(document.querySelector('.google-maps'), {
  center: { lat: 64.1472532, lng: -21.9338615 },
  zoom: 13,
  styles,
});

const html = document.documentElement;
html.className = html.className.replace(/\bis-loading\b/, '');
